import React, { useEffect, useRef, useState } from "react";
import HeaderAdmin from "../components/HeaderAdmin";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import axios from "axios";

function Users(props) {
  const { data: session } = useSession();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [landingPageId, setLandingPageId] = useState(null);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderAdmin handleSubmit={handleSubmit} />
      <div className="max-w-6xl mx-auto p-4 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
            <div className="relative bg-base-200 rounded-3xl overflow-hidden select-none group md:basis-1/2 h-64"></div>
        </div>
      </div>
    </div>
  );
}

export default Users;
