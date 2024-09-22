import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Constructor = ({ onUpdate, content, landingPageId }) => {
  const [uploading, setUploading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    onUpdate({ [name]: type === "checkbox" ? checked : value });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
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

  return (
    <div className="space-y-4">
      <div className="form-control">
        <label htmlFor="userName" className="label">
          <span className="label-text">User Name</span>
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            id="userName"
            name="userName"
            value={content?.userName}
            onChange={handleInputChange}
            className="input input-bordered flex-grow"
          />
          <label className="cursor-pointer label">
            <span className="label-text mr-2">Show Icon</span>
            <input
              type="checkbox"
              name="showUserIcon"
              checked={content?.showUserIcon}
              onChange={handleInputChange}
              className="checkbox checkbox-primary"
            />
          </label>
        </div>
      </div>

      <div className="form-control">
        <label htmlFor="profileImage" className="label">
          <span className="label-text">Profile Image</span>
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="file"
            id="profileImage"
            name="profileImage"
            onChange={handleFileChange}
            className="file-input file-input-bordered w-full"
            accept="image/*"
            disabled={uploading}
          />
          {uploading && (
            <span className="loading loading-spinner loading-md"></span>
          )}
        </div>
        {content?.profileImage?.uploaded && (
          <div className="mt-2">
            <p>Profile image uploaded successfully</p>
          </div>
        )}
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
