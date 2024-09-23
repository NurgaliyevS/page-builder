import { usePlausible } from "next-plausible";
import CTAButton from "./CTAButton";

function Ads() {
  const plausible = usePlausible();
  return (
    <section className="bg-neutral p-6 py-16 md:py-32 text-gray-300">
      <div className="mx-auto flex container max-w-7xl items-center justify-center flex-col gap-8 md:flex-row md:gap-16">
        <video
          className="aspect-square w-full rounded-2xl border-2 border-base-content/20 sm:w-96 md:border-4"
          autoPlay
          muted
          loop
          playsInline
          controls
          width="500"
          height="500"
        >
          <source src="/video/publish-website.mov" type="video/mov" />
          <source src="/video/publish-website.mp4" type="video/mp4" />
        </video>
        <div className="max-w-lg space-y-6 md:space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">
            Build Your Website
          </h2>
          <p className="leading-relaxed">
            Just pick a template. Customize it the way you want. Publish it.
          </p>
          <CTAButton ctaName="Create website" />
        </div>
      </div>
    </section>
  );
}

export default Ads;
