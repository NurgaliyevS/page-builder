import React from "react";

const PhoneMockup = ({ content, session }) => {

  return (
    <div className="mockup-phone border-neutral">
      <div className="camera"></div>
      <div className="display bg-white">
        <div className="artboard bg-white phone-1">
          <div className="flex mt-8 gap-4 items-start justify-start ml-2">
            <span className="relative">
              <img
                className="h-11 w-11 rounded-full object-cover"
                style={{ color: "transparent" }}
                src={session?.user?.image}
              />
            </span>
            <div className="flex-1">
              <h1 className="mb-1 text-xl font-bold lg:mb-3 lg:text-3xl lg:font-extrabold">
                {session?.user?.name}
              </h1>
              <div className="flex flex-col gap-1 lg:flex-row lg:gap-4"></div>
            </div>
            <button
              className="btn-primary btn-sm btn-square btn lg:hidden ml-auto"
              aria-label="Share this Indie Page"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
                ></path>
              </svg>
            </button>
          </div>
          <div className="p-4 flex flex-col">
            <h1 className="text-2xl font-bold mb-4 mt-4 text-center">
              {content?.mainHeadline}
            </h1>
            <p className="mb-6 flex-grow text-center">{content?.mainDescription}</p>
            <button className="btn btn-primary w-full">
              {content?.ctaButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
