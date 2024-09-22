import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
// import { Camera } from "lucide-react";

const Constructor = ({ onUpdate, content, landingPageId }) => {
  const [uploading, setUploading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    onUpdate({ [name]: type === "checkbox" ? checked : value });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Invalid file type. Please upload an image file.");
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("landingPageId", landingPageId);

    try {
      const response = await axios.post("/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (response?.data?.landingPage.content.profileImage) {
        onUpdate({
          profileImage: response.data.landingPage.content.profileImage,
        });
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setUploading(false);
    }
  };

  const renderProfileImage = () => {
    if (content?.showUserIcon && content?.profileImage) {
      const { data, contentType } = content.profileImage;
      if (data && contentType) {
        // Convert binary data to base64 more efficiently
        const uint8Array = new Uint8Array(data.data);
        const base64Image = btoa(
          uint8Array.reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
        const imageSrc = `data:${contentType};base64,${base64Image}`;
        return (
          <img
            src={imageSrc}
            alt="Profile"
            className="inline-block h-12 w-12 rounded-full object-cover"
          />
        );
      }
    }
    return (
      <img
        src={content?.userImage}
        alt={content?.userName}
        className="w-8 h-8 sm:w-12 sm:h-12 rounded-full"
      />
    );
  };

  return (
    <div className="space-y-4">
      <div className="form-control">
        <label htmlFor="userName" className="label">
          <span className="label-text">User Name</span>
        </label>
        <div className="flex items-center space-x-2">
          <div className="relative">
            {renderProfileImage()}
            <label
              htmlFor="profileImage"
              className="absolute inset-0 z-20 flex cursor-pointer items-center justify-center bg-transparent duration-200 group-hover:bg-base-300/50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
              <input
                type="file"
                id="profileImage"
                name="profileImage"
                onChange={handleFileChange}
                accept="image/*"
                disabled={uploading}
                className="hidden"
              />
            </label>
          </div>
          <input
            type="text"
            id="userName"
            name="userName"
            value={content?.userName}
            onChange={handleInputChange}
            className="input input-bordered flex-grow"
          />
          {uploading && (
            <span className="loading loading-spinner loading-md"></span>
          )}
        </div>
      </div>

      <div className="form-control">
        <label htmlFor="mainHeadline" className="label">
          <span className="label-text">Main Headline</span>
        </label>
        <input
          type="text"
          id="mainHeadline"
          name="mainHeadline"
          value={content?.mainHeadline}
          onChange={handleInputChange}
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="mainDescription" className="label">
          <span className="label-text">Main Description</span>
        </label>
        <textarea
          id="mainDescription"
          name="mainDescription"
          value={content?.mainDescription}
          onChange={handleInputChange}
          className="textarea textarea-bordered h-24"
        />
      </div>

      <div className="form-control">
        <label htmlFor="emailInputValue" className="label">
          <span className="label-text">Edit label</span>
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            id="emailInputValue"
            name="emailInputValue"
            value={content?.emailInputValue}
            onChange={handleInputChange}
            className="input input-bordered flex-grow"
          />
          <label className="cursor-pointer label">
            <span className="label-text mr-2">Show Input</span>
            <input
              type="checkbox"
              name="showEmailInput"
              checked={content?.showEmailInput}
              onChange={handleInputChange}
              className="checkbox checkbox-primary"
            />
          </label>
        </div>
      </div>

      <div className="form-control">
        <label htmlFor="ctaButtonText" className="label">
          <span className="label-text">CTA Button Text</span>
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            id="ctaButtonText"
            name="ctaButtonText"
            value={content?.ctaButtonText}
            onChange={handleInputChange}
            className="input input-bordered flex-grow"
          />
          <label className="cursor-pointer label">
            <span className="label-text mr-2">Show CTA</span>
            <input
              type="checkbox"
              name="showCTAButton"
              checked={content?.showCTAButton}
              onChange={handleInputChange}
              className="checkbox checkbox-primary"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Constructor;
