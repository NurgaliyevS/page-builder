import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const HeaderAdmin = ({ handleSubmit, disabledPublish }) => {
  const router = useRouter();

  return (
    <header className="bg-white shadow-lg sticky top-0 z-40 mb-4 p-2 md:p-4">
      <div className="mb-2 flex justify-end gap-2 pb-2 md:hidden">
        <Link href="/admin/publish" passHref onClick={handleSubmit}>
          <div className="btn-primary btn-sm btn gap-1.5 lg:btn-md">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                  clipRule="evenodd"
                />
                <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
              </svg>
            </span>
            <div className="text-sm">Publish</div>
          </div>
        </Link>
      </div>
      <div className="navbar container mx-auto">
        <div className="flex-1 hidden gap-2 md:flex lg:gap-4">
          <Link href="/admin" passHref>
            <div
              className={`btn-ghost btn-sm btn gap-1.5 lg:btn-md ${
                router.pathname === "/admin" ? "btn-active" : ""
              }`}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
              </span>
              <div className="text-sm">Page</div>
            </div>
          </Link>
          <Link href="/admin/style" passHref>
            <div
              className={`btn-ghost btn-sm btn gap-1.5 lg:btn-md ${
                router.pathname === "/admin/style" ? "btn-active" : ""
              }`}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 00-3.471 2.987 10.04 10.04 0 014.815 4.815 18.748 18.748 0 002.987-3.472l3.386-5.079A1.902 1.902 0 0020.599 1.5zm-8.3 14.025a18.76 18.76 0 001.896-1.207 8.026 8.026 0 00-4.513-4.513A18.75 18.75 0 008.475 11.7l-.278.5a5.26 5.26 0 013.601 3.602l.502-.278zM6.75 13.5A3.75 3.75 0 003 17.25a1.5 1.5 0 01-1.601 1.497.75.75 0 00-.7 1.123 5.25 5.25 0 009.8-2.62 3.75 3.75 0 00-3.75-3.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <div className="text-sm">Style</div>
            </div>
          </Link>
          <Link href="/admin/users" passHref>
            <div
              className={`btn-ghost btn-sm btn gap-1.5 lg:btn-md ${
                router.pathname === "/admin/users" ? "btn-active" : ""
              }`}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    d="M14.8651 23.854C12.6388 23.854 10.4124 23.8421 8.18627 23.8578C6.39644 23.8705 4.60741 23.9274 2.81778 23.941C2.31429 23.941 1.81149 23.8995 1.31361 23.8172C0.24114 23.648 -0.185569 22.9504 0.171583 21.825C0.415811 21.0712 0.734972 20.3492 1.12326 19.6721C2.76838 16.7725 5.16205 14.8895 8.03077 13.6765C9.58814 13.0043 11.2434 12.6466 12.9167 12.6207C15.4184 12.5968 17.7213 13.294 19.688 15.1062C21.0306 16.3264 22.1279 17.8393 22.9103 19.549C23.1282 20.0269 23.3736 20.4936 23.5481 20.9901C23.7156 21.4486 23.8326 21.9274 23.8969 22.4162C23.9828 23.1486 23.6112 23.6341 22.9454 23.7262C22.4809 23.7956 22.0129 23.8341 21.544 23.8417C19.3178 23.8528 17.0913 23.8469 14.8651 23.8469V23.854ZM22.1791 22.0666C22.1878 21.9886 22.1871 21.9098 22.177 21.8321C21.4679 19.81 20.4881 17.9823 18.9742 16.5507C17.8064 15.4462 16.4963 14.6514 14.9402 14.4359C13.147 14.1876 11.3702 14.2396 9.61752 14.7819C6.30166 15.8078 3.65605 17.8273 1.84436 21.0829C1.63822 21.4532 1.4746 21.8519 1.28504 22.2494C1.34265 22.284 1.40276 22.3134 1.46474 22.3372C2.08508 22.4869 2.70369 22.3989 3.32932 22.3605C4.62949 22.2804 5.93323 22.246 7.23563 22.2387C11.4966 22.2146 15.7576 22.2164 20.0186 22.194C20.7279 22.1899 21.436 22.1122 22.1794 22.0666H22.1791Z"
                    fill="black"
                  />
                  <path
                    d="M12.4356 0.0778456C14.1509 0.0319665 15.584 0.930994 16.672 2.56489C16.9285 2.95012 17.2379 3.30777 17.4253 3.73028C17.8438 4.67466 18.1906 5.6448 17.9681 6.74702C17.7592 7.78203 17.4869 8.77868 16.88 9.62705C15.8007 11.134 14.4247 12.0657 12.666 12.2974C11.0831 12.506 9.57789 12.2485 8.17257 11.4306C6.72515 10.5882 5.90162 9.22518 5.60264 7.47385C5.15264 4.83742 6.40868 2.47292 8.39051 1.21576C9.5898 0.454796 10.8849 0.0712596 12.4356 0.0778456ZM16.194 5.43418C16.2727 4.76955 16.0304 4.23876 15.6551 3.75508C15.5086 3.56631 15.3762 3.36381 15.2238 3.1813C14.672 2.52068 14.0428 1.99805 13.2058 1.85975C12.0325 1.64651 10.8279 1.81991 9.74438 2.35804C8.39 3.04199 7.37967 4.0847 7.14689 5.81851C6.87536 7.84109 7.82588 9.65114 9.51636 10.2487C10.5293 10.5964 11.599 10.6985 12.6514 10.5481C14.0901 10.3672 15.7836 8.74327 16.0123 7.07644C16.0871 6.53125 16.1342 5.98139 16.194 5.43364V5.43418Z"
                    fill="black"
                  />
                </svg>
              </span>
              <div className="text-sm">Users</div>
            </div>
          </Link>
        </div>
        <div className="flex-none hidden md:flex">
          {disabledPublish ? (
            <div className="btn-primary btn-sm btn gap-1.5 lg:btn-md opacity-50 cursor-not-allowed">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                    clipRule="evenodd"
                  />
                  <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
                </svg>
              </span>
              <div className="text-sm">Publish</div>
            </div>
          ) : (
            <Link href="/admin/publish" passHref onClick={handleSubmit}>
              <div className="btn-primary btn-sm btn gap-1.5 lg:btn-md">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                      clipRule="evenodd"
                    />
                    <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
                  </svg>
                </span>
                <div className="text-sm">Publish</div>
              </div>
            </Link>
          )}
        </div>
        <div className="flex justify-center gap-2 md:hidden">
          <Link href="/admin" passHref>
            <div
              className={`btn-ghost btn-block btn flex-1 flex-col gap-1 ${
                router.pathname === "/admin" ? "btn-active" : ""
              }`}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
              </span>
              <div className="text-sm">Page</div>
            </div>
          </Link>
          <Link href="/admin/style" passHref>
            <div
              className={`btn-ghost btn-block btn flex-1 flex-col gap-1 ${
                router.pathname === "/admin/style" ? "btn-active" : ""
              }`}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 00-3.471 2.987 10.04 10.04 0 014.815 4.815 18.748 18.748 0 002.987-3.472l3.386-5.079A1.902 1.902 0 0020.599 1.5zm-8.3 14.025a18.76 18.76 0 001.896-1.207 8.026 8.026 0 00-4.513-4.513A18.75 18.75 0 008.475 11.7l-.278.5a5.26 5.26 0 013.601 3.602l.502-.278zM6.75 13.5A3.75 3.75 0 003 17.25a1.5 1.5 0 01-1.601 1.497.75.75 0 00-.7 1.123 5.25 5.25 0 009.8-2.62 3.75 3.75 0 00-3.75-3.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <div className="text-sm">Style</div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderAdmin;
