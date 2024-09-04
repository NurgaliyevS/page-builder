import React from "react";
import CTAButton from "./CTAButton";

function Hero(props) {
  return (
    <section
      className="hero relative min-h-screen overflow-hidden bg-neutral text-gray-300"
      id="create"
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content p-6 text-center">
        <div className="max-w-4xl space-y-12 p-6 md:space-y-24">
          <h2 className="text-5xl font-extrabold leading-tight tracking-tight md:text-6xl md:leading-tight lg:text-7xl lg:leading-tight">
            Create your page!
          </h2>
          <div className="mx-auto max-w-lg">
            <form className="flex flex-wrap gap-2 w-full justify-center flex-col">
              <div className="flex-1">
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
              <CTAButton customStyle={"group btn-block"} />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
