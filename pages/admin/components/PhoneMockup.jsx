import React from "react";

const PhoneMockup = ({ content }) => {
  return (
    <div className="mockup-phone border-neutral">
      <div className="camera"></div>
      <div className="display bg-white">
        <div className="artboard bg-white phone-1">
          <div className="flex mt-8 gap-4 items-start justify-start ml-2">
            {content.showUserIcon && content.userImage && (
              <span className="relative">
                <img
                  src={content.userImage}
                  alt={content.userName}
                  className="w-12 h-12 rounded-full"
                />
              </span>
            )}
            <div className="flex-1">
              <h1 className="mb-1 text-xl font-bold lg:mb-3 lg:text-3xl lg:font-extrabold">
                {content.userName}
              </h1>
              <div className="flex flex-col gap-1 lg:flex-row lg:gap-4"></div>
            </div>
          </div>
          <div className="p-4 flex flex-col">
            <h1 className="text-2xl font-bold mb-4 mt-4 text-center">
              {content.mainHeadline}
            </h1>
            <p className="mb-6 flex-grow text-center">{content.mainDescription}</p>
            <button className="btn btn-primary w-full">
              {content.ctaButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
