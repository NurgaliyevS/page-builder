import Image from "next/image";
import Link from "next/link";
import { handleSignIn } from "./handleSignIn";
import { buyProduct } from "./buyProduct";
import { usePlausible } from "next-plausible";

function Pricing(props) {
  const plausible = usePlausible();
  return (
    <section className="bg-neutral py-44 flex flex-col overflow-hidden">
      <div className="container max-w-6xl mx-auto space-y-8 p-6 py-16 md:space-y-16 md:py-32">
        <div className="flex justify-center items-center px-10 text-center mb-20 flex-col gap-10 lg:gap-14">
          <div>
            <div className="badge animate-bounce whitespace-nowrap badge-primary">
              ✨ LAUNCH discount — 50% OFF 3 months ✨
            </div>
          </div>
          <h2
            className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4"
            id="pricing"
          >
            <strong className="relative text-primary">Pricing</strong>
          </h2>
        </div>

        <div class="mx-auto my-16 md:my-20 p-8 lg:p-12 bg-stone-100 rounded-3xl flex flex-col lg:flex-row gap-8 lg:gap-12 lg:justify-between lg:mr-6">
          <div class="space-y-6 flex-1 w-full">
            <p class="text-2xl tracking-tight font-bold">
              Create your product
            </p>
            <ul class="space-y-4 text-base-content-secondary">
              <li class="flex gap-3 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5 shrink-0 inline opacity-80"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Collect emails
              </li>

              <li class="flex gap-3 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5 shrink-0 inline opacity-80"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Build MVP in minutes
                </span>
              </li>
              <li class="flex gap-3 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5 shrink-0 inline opacity-80"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Manage your subscriptions list
                </span>
              </li>
              <li class="flex gap-3 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5 shrink-0 inline opacity-80"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Personal Link
              </li>
              <li class="flex gap-3 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5 shrink-0 inline opacity-80"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Boost SEO to your projects
              </li>
              <li class="flex gap-3 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5 shrink-0 inline opacity-80"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                30 themes and 10 fonts
              </li>
            </ul>
          </div>
          <div class="flex flex-col lg:flex-row gap-8 lg:gap-14">
            <div class="border border-base-content/10  bg-base-100 rounded-2xl lg:rounded-3xl text-center p-8 lg:p-12 -mx-4 -mb-4 lg:-my-8">
              <div class="flex flex-col gap-6 lg:gap-8 justify-center h-full">
                <p class="text-xl font-semibold">1-Year Pass</p>
                <div class="flex items-baseline justify-center gap-x-2">
                  <span class="text-lg tracking-tight text-base-content-secondary/80 line-through decoration-1">
                    $55
                  </span>
                  <div class="text-5xl font-bold tracking-tight">$25</div>
                  <span class="text-sm font-base leading-6 tracking-wide text-base-content-secondary/80">
                    USD
                  </span>
                </div>
                <p class="text-sm text-base-content-secondary">
                  One-time payment. No subscription
                </p>
                <div class="w-full">
                  <a class="btn-primary btn-block btn" href="/#signup">
                    Start now
                  </a>
                </div>
              </div>
            </div>
            <div class="border  border-accent relative lg:!py-16 lg:!-my-16 lg:!px-16 lg:!-mx-16 z-10  bg-base-100 rounded-2xl lg:rounded-3xl text-center p-8 lg:p-12 -mx-4 -mb-4 lg:-my-8">
              <div class="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 badge badge-accent badge-sm uppercase font-semibold">
                Popular
              </div>
              <div class="flex flex-col gap-6 lg:gap-8 justify-center h-full">
                <p class="text-xl font-semibold">Lifetime Deal</p>
                <div class="flex items-baseline justify-center gap-x-2">
                  <span class="text-lg tracking-tight text-base-content-secondary/80 line-through decoration-1">
                    $75
                  </span>
                  <div class="text-5xl font-bold tracking-tight">$45</div>
                  <span class="text-sm font-base leading-6 tracking-wide text-base-content-secondary/80">
                    USD
                  </span>
                </div>
                <p class="text-sm text-base-content-secondary">
                  One-time payment. No subscription
                </p>
                <div class="w-full">
                  <a class="btn-primary btn-block btn" href="/#signup">
                    Start now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
