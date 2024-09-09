import React, { useState } from "react";
import PhoneMockup from "./PhoneMockup";

function PreviewButton({ content, product, customizations }) {
  const [showPreview, setShowPreview] = useState(false);

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  return (
    <>
      <div className="fixed top-20 left-1/2 z-20 -translate-x-1/2 md:hidden">
        <button className="btn gap-1 shadow-lg" onClick={togglePreview}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
            <path
              fillRule="evenodd"
              d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          Preview
        </button>
      </div>
      {showPreview && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center md:hidden">
          <div className="bg-white p-4 rounded-lg max-h-[90vh] overflow-y-auto">
            <PhoneMockup
              content={content}
              product={product}
              customizations={customizations}
              togglePreview={togglePreview}
            />
            <button className="btn mt-4 w-full" onClick={togglePreview}>
              Close Preview
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default PreviewButton;
