import React from "react";

const PhoneMockup = ({ content, product, customizations, togglePreview }) => {
  const { theme, font } = customizations || {};

  const fontStyle = font ? { fontFamily: font } : {};

  const renderProfileImage = () => {
    if (content?.showUserIcon && content?.profileImage) {
      const { data, contentType } = content.profileImage;
      if (data && contentType) {
        // Convert binary data to base64 more efficiently
        const uint8Array = new Uint8Array(data.data);
        const base64Image = btoa(
          uint8Array.reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
        const imageSrc = `data:${contentType};base64,${base64Image}`;
        return (
          <img
            src={imageSrc}
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
        );
      }
    }
    return null;
  };

  return (
    <div
      className={`mockup-phone border-neutral w-full h/2/3 sm:w-auto sm:h-auto fixed inset-0 z-50 sm:static min-w-96`}
      data-theme={theme}
      style={fontStyle}
    >
      <div className="camera"></div>
      <div className="display bg-base-100">
        <div className="artboard bg-base-100 min-h-screen overflow-y-auto">
          {togglePreview && (
            <button
              className="btn btn-sm btn-circle absolute right-5 top-5 z-10 btn-primary"
              onClick={togglePreview}
            >
              ✕
            </button>
          )}
          <div className="flex mt-4 sm:mt-8 gap-2 sm:gap-4 items-start justify-start ml-2">
            {renderProfileImage()}
            <div className="flex-1">
              <h1 className="mb-1 text-lg sm:text-xl font-bold sm:mb-3 lg:text-3xl lg:font-extrabold text-base-content">
                {content?.userName}
              </h1>
              <div className="flex flex-col gap-1 lg:flex-row lg:gap-4"></div>
            </div>
          </div>
          <div className="p-2 sm:p-4 flex flex-col gap-2 sm:gap-4">
            {content?.mainHeadline && (
              <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 mt-2 sm:mt-4 text-center text-base-content">
                {content?.mainHeadline}
              </h2>
            )}
            {content?.mainDescription && (
              <p className="mb-3 sm:mb-6 flex-grow text-sm sm:text-base text-center text-base-content">
                {content?.mainDescription}
              </p>
            )}

            {content?.showEmailInput && (
              <div className="mb-2">
                <label
                  htmlFor="email-input"
                  className="block mb-1 text-xs sm:text-sm font-medium text-base-content"
                >
                  {content?.emailInputValue}
                </label>
                <input
                  id="email-input"
                  type="email"
                  placeholder="example@gmail.com"
                  className="input input-bordered w-full bg-base-200 text-base-content text-sm sm:text-base"
                  readOnly
                />
              </div>
            )}

            {content?.showCTAButton && content?.ctaButtonText && (
              <button className="btn btn-primary w-full text-sm sm:text-base">
                {content?.ctaButtonText}
              </button>
            )}
          </div>

          <div
            className={`divider my-0 px-3 sm:px-6 ${
              product?.isOpenProduct ? "" : "hidden"
            }`}
          ></div>

          {product?.isOpenProduct && product?.products?.length > 0 && (
            <ul className="p-2 sm:p-4 space-y-2 sm:space-y-4 overflow-y-auto">
              {product?.products.map((item, index) => (
                <li key={index} className="card bg-base-200 duration-200">
                  <a
                    className="group rounded-box cursor-pointer p-2 sm:p-3 duration-200 hover:scale-[1.02] hover:bg-base-300"
                    href={item?.productURL}
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    <span className="flex items-center">
                      <p className="font-bold text-xs sm:text-sm flex-grow truncate mr-auto lg:text-lg text-base-content">
                        {item?.productName}
                      </p>
                      {item?.productStage && (
                        <p
                          className={`badge text-xs ${
                            item.productStage === "development"
                              ? "badge-info"
                              : item.productStage === "testing"
                              ? "badge-warning"
                              : item.productStage === "production"
                              ? "badge-success"
                              : item.productStage === "forsale"
                              ? "badge-secondary"
                              : item.productStage === "disconnected"
                              ? "badge-error"
                              : ""
                          }`}
                        >
                          {item.productStage === "development" && "🛠️"}
                          {item.productStage === "testing" && "🧪"}
                          {item.productStage === "production" && "🚀"}
                          {item.productStage === "forsale" && "💰"}
                          {item.productStage === "disconnected" && "🔌"}{" "}
                          {item?.productStage?.charAt(0).toUpperCase() +
                            item?.productStage?.slice(1)}
                        </p>
                      )}
                    </span>
                    {item?.productDescription && (
                      <p className="text-xs sm:text-sm lg:text-base text-base-content mt-1">
                        {item?.productDescription}
                      </p>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;