import React, { useEffect, useRef, useState } from "react";
import HeaderAdmin from "../components/HeaderAdmin";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import axios from "axios";
import { CSVLink } from "react-csv";

function Users() {
  const { data: session } = useSession();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [landingPage, setLandingPage] = useState(null);
  const [users, setUsers] = useState([]);

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      if (session?.user) {
        fetchLandingPage();
        isInitialMount.current = false;
      }
    }
  }, [session]);

  const fetchLandingPage = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/admin/landing-page", {
        params: { userId: session.user.id },
      });
      const landingPage = response?.data[0];
      setLandingPage(landingPage);
      if (response.data && response.data.length > 0) {
        const users = response?.data?.[0]?.subscribers;
        if (users) {
          setUsers(users);
        }
      }
    } catch (error) {
      console.error("Error fetching landing page:", error);
      toast.error("Failed to fetch users");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    const userText = users.map((user) => `${user.email}`).join("\n");
    navigator.clipboard.writeText(userText).then(() => {
      toast.success("Users copied to clipboard!");
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(landingPage, "landingPage");
    if (
      landingPage &&
      landingPage?.userId &&
      landingPage?.userId?.variant_name === "free"
    ) {
      router.push(`/admin/publish`);
    } else {
      router.push(`/${landingPage.personalLink}`);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      <HeaderAdmin handleSubmit={handleSubmit} />
      <div className="max-w-6xl mx-auto p-4 space-y-4 min-h-screen">
        {/* Centered Copy Button and CSV Download */}
        <div className="flex flex-col items-center mt-4">
          <button
            onClick={handleCopy}
            className="mb-2 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
          >
            Copy All Users
          </button>
          <CSVLink
            data={users.map((user) => ({ Email: user.email }))}
            filename={"users.csv"}
            className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600"
          >
            Download Users as Excel File
          </CSVLink>
        </div>

        {/* Users Table */}
        <table className="min-w-full bg-white border border-gray-200 mt-4">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.length &&
              users.map((user, index) => (
                <tr key={user.id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{user.email}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
