import Link from "next/link";
import Image from "next/image";
import { usePlausible } from "next-plausible";
import { isDevelopment } from "@/utils/isDevelopment";

function Footer({ bgColor }) {
  const plausible = usePlausible();
  return (
    <div
      className={`${bgColor ? bgColor : "bg-neutral"} ${
        bgColor ? "text-base-content" : "text-gray-300"
      } overflow-hidden border-t ${
        bgColor ? "border-base-content/5" : "border-base-content/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-80 max-w-full flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              className="flex gap-2 justify-center md:justify-start items-center"
              href="/"
              title="Sub Page - home page"
            >
              <Image
                src={"/company_related/logo.webp"}
                alt="Sub Page logo"
                className="w-5 h-5"
                priority={true}
                width={24}
                height={24}
              />
              <span className="font-extrabold text-lg">SubPage</span>
            </Link>

            <p className="mt-3 text-sm leading-relaxed">
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>

            <nav className="flex gap-4 mt-3 justify-center lg:justify-start">
              <Link
                href="https://x.com/tech_nurgaliyev"
                target="_blank"
                title="X tech_nurgaliyev"
                onClick={() => {
                  plausible("X");
                }}
              >
                <Image
                  src={"/x.png"}
                  alt="X"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/sabyr-nurgaliyev-43b4a822a/"
                target="_blank"
                title="Linkedin sabyr-nurgaliyev"
                onClick={() => {
                  plausible("LINKEDIN");
                }}
              >
                <Image
                  src={"/linkedin.svg"}
                  alt="Linkedin"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </Link>
              <Link
                href="https://www.producthunt.com/@tech_nurgaliyev"
                target="_blank"
                title="ProductHunt tech_nurgaliyeev"
                onClick={() => {
                  plausible("PRODUCT_HUNT");
                }}
              >
                <Image
                  src={"/productHunt.svg"}
                  alt="ProductHunt"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </Link>
            </nav>
          </div>

          <div className="flex-grow flex flex-wrap md:pl-24 -mb-10 md:mt-0 mt-10 text-center md:text-left">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold tracking-widest text-sm md:text-left mb-3">
                LINKS
              </div>
              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <Link
                  className="link link-hover"
                  href="#pricing"
                  title="Sub Page - home page"
                  onClick={() => {
                    plausible("PRICING");
                  }}
                >
                  Pricing
                </Link>
                <Link
                  className="link link-hover"
                  href="mailto:nurgasab@gmail.com"
                  title="Sub Page - home page"
                  onClick={() => {
                    plausible("CONTACT_US");
                  }}
                >
                  Contact Us
                </Link>
                <Link
                  className="link link-hover"
                  href="#faq"
                  title="Sub Page - home page"
                  onClick={() => {
                    plausible("FAQ");
                  }}
                >
                  FAQ
                </Link>
                <Link
                  className="link link-hover"
                  href={isDevelopment() ? "/blog" : "https://subpage.io/blog"}
                  title="Sub Page - blog"
                >
                  Blog
                </Link>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold tracking-widest text-sm md:text-left mb-3">
                More
              </div>
              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <Link
                  className="link link-hover"
                  href="https://www.redditscheduler.com"
                  target="_blank"
                  title="Reddit Scheduler - home page"
                >
                  Reddit Scheduler
                </Link>
                <Link
                  className="link link-hover"
                  href="https://mvpagency.org/"
                  target="_blank"
                  title="MVPAgency - home page"
                >
                  MVPAgency
                </Link>

                <Link
                  className="link link-hover"
                  href="https://pregnantmeal.com/"
                  target="_blank"
                  title="PregnantMeal - home page"
                  onClick={() => {
                    plausible("PregnantMeal");
                  }}
                >
                  PregnantMeal
                </Link>

                <Link
                  className="link link-hover"
                  href="https://redditagency.com/"
                  target="_blank"
                  title="Reddit Agency - home page"
                  onClick={() => {
                    plausible("RedditAgency");
                  }}
                >
                  RedditAgency
                </Link>
                <Link
                  className="link link-hover"
                  href="https://bestwebsitegames.com/"
                  target="_blank"
                  title="Best Websites Games - home page"
                  onClick={() => {
                    plausible("bestwebsitegames");
                  }}
                >
                  Best Websites Games
                </Link>
                <Link
                  className="link link-hover"
                  href="https://uptimefriend.com/"
                  target="_blank"
                  title="UptimeFriend - home page"
                  onClick={() => {
                    plausible("UptimeFriend");
                  }}
                >
                  UptimeFriend
                </Link>
                <Link
                  className="link link-hover"
                  href="https://tripplanss.com/"
                  target="_blank"
                  title="Trip Planss - home page"
                  onClick={() => {
                    plausible("TRIPPLANSS");
                  }}
                >
                  TripPlanss
                </Link>
                <Link
                  className="link link-hover"
                  href="https://weeealth.com/"
                  target="_blank"
                  title="Weeealth - home page"
                  onClick={() => {
                    plausible("WEEEALTH");
                  }}
                >
                  Weeealth
                </Link>

                <Link
                  className="link link-hover"
                  href="https://environmentaljobboards.com/"
                  target="_blank"
                  title="Environmental Job Boards - home page"
                  onClick={() => {
                    plausible("EnvironmentalJobBoards");
                  }}
                >
                  Environmental Job Boards
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
