"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { handleSignIn } from "./handleSignIn";
import { usePlausible } from "next-plausible";
import CTAButton from "./CTAButton";

const faqList = [
  {
    question: "What is a landing page builder?",
    answer: (
      <p>
        A landing page builder helps you create a simple web page where people
        can sign up for your email list. It's perfect for getting more
        subscribers!
      </p>
    ),
  },
  {
    question: "What does 'No coding skills required' mean?",
    answer: (
      <p>
        It means you can create your landing page without any programming
        knowledge. Our tool is designed to be simple and user-friendly, so you
        can focus on building your audience, not learning to code.
      </p>
    ),
  },
  {
    question: "How quickly can I build my Minimal Viable Product (MVP)?",
    answer: (
      <p>
        You can build your MVP in minutes! Just pick a template, customize it,
        and start collecting emails right away. It’s the fastest way to validate
        your idea with minimal resources.
      </p>
    ),
  },
  {
    question: "What is the 'Personal Link' feature?",
    answer: (
      <p>
        The "Personal Link" lets you share your landing page or portfolio with a
        custom URL. It's perfect for sharing your journey, linking your
        startups, and writing about your failures and wins.
      </p>
    ),
  },
  {
    question: "How does the 1-Year Pass work?",
    answer: (
      <p>
        The 1-Year Pass gives you access to all features for a full year with a
        one-time payment of $25. No subscription is required, and you can use
        any of the 30 themes and 10 fonts to customize your landing page.
      </p>
    ),
  },
  {
    question: "What’s included in the Lifetime Deal?",
    answer: (
      <p>
        The Lifetime Deal gives you permanent access to all features for just
        $45. Pay once and enjoy all future updates and features without any
        additional costs.
      </p>
    ),
  },
  {
    question: "How can this tool boost SEO for my projects?",
    answer: (
      <p>
        Our tool includes built-in SEO features that help improve your search
        engine rankings. Also you can add links to your existing projects.
      </p>
    ),
  },
  {
    question: "Can I manage my email subscription list?",
    answer: (
      <p>
        You can easily manage your subscription list, and export your data
        whenever you need to.
      </p>
    ),
  },
];

const FaqItem = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span className={`flex-1 ${isOpen ? "text-primary" : ""}`}>
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

function FAQ() {
  const plausible = usePlausible();
  return (
    <section
      className="bg-neutral text-gray-300 py-30 overflow-hidden"
      id="faq"
    >
      <div className="px-8 container max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="sm:text-4xl text-3xl font-extrabold">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <FaqItem key={i} item={item} />
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-center mt-20">
      </div>
    </section>
  );
}

export default FAQ;
