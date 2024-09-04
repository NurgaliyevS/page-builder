import React from "react";

const Constructor = ({ onUpdate, content }) => {
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    onUpdate({ [name]: type === "checkbox" ? checked : value });
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
