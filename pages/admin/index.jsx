import React, { useState, useEffect } from "react";
import HeaderAdmin from "./components/HeaderAdmin";
import Constructor from "./components/Constructor";
import PhoneMockup from "./components/PhoneMockup";
import { useSession } from "next-auth/react";
import Products from "./components/Products";

function Admin() {
  const { data: session } = useSession();

  const [pageContent, setPageContent] = useState({
    ctaButtonText: "Subscribe",
    mainHeadline: "Join our Waitlist!",
    mainDescription:
      "Our new project is launching soon. Join our waitlist to be the first to know when we launch. Stay tuned!",
    userName: "",
    userImage: "",
    showUserIcon: true,
    showCTAButton: true,
    showEmailInput: true,
    emailInputValue: "Enter your email:",
  });

  const [productContent, setProductContent] = useState({
    isOpenProduct: false,
    products: [
      {
        productURL: "",
        productName: "",
        productDescription: "",
        productStage: "",
      },
    ],
  });

  const isInitialMount = React.useRef(false);

  useEffect(() => {
    if (!isInitialMount.current) {
      if (session?.user) {
        setPageContent((prevContent) => ({
          ...prevContent,
          userName: session.user.name || "",
          userImage: session.user.image || "",
        }));
        isInitialMount.current = true;
      }
    }
  }, [session]);

  const handleUpdate = (updates) => {
    setPageContent((prevContent) => ({ ...prevContent, ...updates }));
  };

  const handleUpdateProduct = (updates) => {
    setProductContent((prevContent) => ({ ...prevContent, ...updates }));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderAdmin />
      <div className="md:flex p-4 h-full max-w-7xl mx-auto overflow-auto">
        <div className="max-w-3xl mx-auto md:basis-3/5 space-y-4 overflow-y-auto pb-44">
          <h1 className="text-3xl font-bold mb-6 ">
            Page Constructor
          </h1>
          <div className="card bg-white shadow-lg">
            <div className="card-body">
              <Constructor onUpdate={handleUpdate} content={pageContent} />
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-6">
            Product Constructor
          </h1>
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <Products
                onUpdate={handleUpdateProduct}
                product={productContent}
              />
            </div>
          </div>
        </div>

        <div className="hidden md:block md:basis-2/5 mx-auto max-w-sm">
          <h2 className="text-2xl font-semibold mb-4">Preview</h2>
          <PhoneMockup content={pageContent} product={productContent}/>
        </div>
      </div>
    </div>
  );
}

export default Admin;
