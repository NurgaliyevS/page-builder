import React from "react";

const PhoneMockup = ({ content }) => {
  return (
    <div className="mockup-phone border-neutral">
      <div className="camera"></div>
      <div className="display bg-white">
        <div className="artboard bg-white phone-1">
          <div className="flex mt-8 gap-4 items-start justify-start ml-2">
            {content?.showUserIcon && content?.userImage && (
              <span className="relative">
                <img
                  src={content?.userImage}
                  alt={content?.userName}
                  className="w-12 h-12 rounded-full"
                />
              </span>
            )}
            <div className="flex-1">
              <h1 className="mb-1 text-xl font-bold lg:mb-3 lg:text-3xl lg:font-extrabold">
                {content?.userName}
              </h1>
              <div className="flex flex-col gap-1 lg:flex-row lg:gap-4"></div>
            </div>
          </div>
          <div className="p-4 flex flex-col gap-4">
            <h2 className="text-2xl font-bold mb-4 mt-4 text-center">
              {content?.mainHeadline}
            </h2>
            <p className="mb-6 flex-grow text-center">
              {content?.mainDescription}
            </p>

            {content?.showEmailInput && (
              <div className="mb-2">
                <label htmlFor="email-input" className="block mb-1 text-sm font-medium text-gray-700">
                  {content?.emailInputValue}
                </label>
                <input
                  id="email-input"
                  type="email"
                  placeholder="example@gmail.com"
                  className="input input-bordered w-full"
                  readOnly
                />
              </div>
            )}

            {content?.showCTAButton && content?.ctaButtonText && (
              <button className="btn btn-primary w-full">
                {content?.ctaButtonText}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
