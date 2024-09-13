import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function FirstStep({ session, setLandingPageId, onLandingPageCreated, personalLinkLanding }) {
  const [personalLink, setPersonalLink] = useState(personalLinkLanding || "");
  const [showTip, setShowTip] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("/api/admin/landing-page", {
        personalLink: personalLink,
        userId: session?.user?.id,
        content: {
          userName: session?.user?.name,
          userImage: session?.user?.image
        }
      });
      if (response.status === 201) {
        console.log("Personal link created successfully");
        setLandingPageId(response?.data?.landingPage?._id);
        // Call the onLandingPageCreated function to trigger fetchLandingPage
        onLandingPageCreated();
        toast.success("Landing page created successfully");
      } else {
        toast.error(response.data.message || "An error occurred")
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred")
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Only allow English letters
    const sanitizedValue = value.replace(/[^a-zA-Z]/g, '');
    setPersonalLink(sanitizedValue);
    setShowTip(value !== sanitizedValue);
  };

  return (
    <div className="card bg-white shadow-lg">
      <div className="card-body">
        <p className="text-primary font-bold">Create your personal link</p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap gap-4 w-full justify-center flex-col"
        >
          <div className="flex-1">
            <div className="form-control border border-base-content/20 rounded-lg flex items-center justify-center">
              <label className="placeholder:text-base-content/50 text-base-content bg-base-300 input-group group w-full flex items-center justify-center">
                <span className="pl-2 pr-0 select-none text-primary">
                  subpage.io/
                </span>
                <input
                  type="text"
                  placeholder="yourname"
                  className="input pl-0 w-full bg-base-300 min-w-32"
                  autoCapitalize="none"
                  autoComplete="off"
                  spellCheck="false"
                  minLength="2"
                  maxLength="20"
                  required
                  value={personalLink}
                  onChange={handleInputChange}
                  pattern="[a-zA-Z]+"
                  title="Only English letters are allowed"
                />
              </label>
            </div>
            {showTip && (
              <p className="text-sm text-red-500 mt-1">Only English letters are allowed</p>
            )}
          </div>
          <button
            type="submit"
            className="group btn-block btn btn-primary no-underline"
            disabled={loading}
          >
            Create page
          </button>
        </form>
      </div>
    </div>
  );
}

export default FirstStep;
