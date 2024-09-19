import React, { useEffect, useState } from "react";
import { usePlausible } from "next-plausible";
import CTAButton from "./CTAButton";
import { signIn } from "next-auth/react";

function Main() {
  const plausible = usePlausible();
  const [personalLink, setPersonalLink] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleInputChange = (e) => {
    setPersonalLink(e.target.value);
  };

  const images = [
    "/phone/subpage.io_bahmeteva.png",
    "/phone/subpage.io_dmitry.png",
    "/phone/subpage.io_magicscan.png",
    "/phone/subpage.io_riponsoum.png",
    "/phone/subpage.io_titothemo.png",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

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
                      value={personalLink}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
              </div>
              <CTAButton personalLink={personalLink} />
            </form>
          </div>
        </div>

        <div className="relative max-md:-m-4">
          <div className="mockup-phone max-h-96 lg:max-h-full">
            <div className="camera">
            </div>
            <div className="display">
              <div className="artboard artboard-demo phone-1 cursor-not-allowed">
                <img
                  src={images[currentImageIndex]}
                  alt="phone"
                  className="phone-image w-full h-full object-cover"
                />
              </div>
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