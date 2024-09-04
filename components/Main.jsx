import { usePlausible } from "next-plausible";
import CTAButton from "./CTAButton";

function Main() {
  const plausible = usePlausible();
  return (
    <section className="container max-w-7xl mx-auto flex flex-col items-center justify-between px-8 py-8 gap-10">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full gap-16">
        <div className="flex flex-col gap-10 lg:gap-14 items-center lg:items-start text-center lg:text-left w-full lg:w-2/3">
          <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4 flex justify-center items-center">
            <span className="whitespace-wrap lg:whitespace-nowrap relative">
              Create your{" "}
              <strong className="relative text-primary">page</strong>
            </span>
          </h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Our tool helps{" "}
            <strong className="relative text-primary">you</strong> capture
            <strong className="relative text-primary"> emails</strong> and grow
            your <strong className="relative text-primary"> audience</strong>{" "}
            fast.
          </p>
          <div className="flex gap-2">
            <form className="flex flex-wrap items-center gap-2">
              <div className="flex-grow">
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
                    />
                  </label>
                </div>
              </div>
              <CTAButton />
              {/* <button
                className="btn btn-primary btn-wide group shadow-lg"
                type="submit"
              >
                GET MY PAGE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 ml-1 group-hover:translate-x-1 duration-200"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </button> */}
            </form>
          </div>
        </div>

        <div className="relative max-md:-m-4">
          <div className="mockup-phone max-h-96 lg:max-h-full">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">Hi.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full text-center">
        <p className="text-lg text-neutral-500">No coding skills required. </p>
      </div>
    </section>
  );
}

export default Main;