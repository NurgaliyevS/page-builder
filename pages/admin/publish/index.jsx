import React from "react";
import HeaderAdmin from "../components/HeaderAdmin";
import Pricing from "@/components/Pricing";
import { toast } from "react-toastify";

function Publish() {
  const handleSubmit = (e) => {
    e?.preventDefault(); // Prevent default form submission
    toast.error("Buy 1-Year Pass or Lifetime Deal to Publish")
  };

  return (
    <div className="min-h-screen bg-neutral pb-96">
      <HeaderAdmin handleSubmit={handleSubmit} />
      <div className="md:flex p-4 h-full max-w-7xl mx-auto overflow-auto">
        <div className="mx-auto mb-6 max-w-3xl text-3xl font-black leading-tight tracking-tight md:mb-8 md:text-5xl md:leading-tight text-center text-primary">
          Publish your Page
        </div>
      </div>
      <Pricing customStyle={"py-0 my-0"} />
    </div>
  );
}

export default Publish;
