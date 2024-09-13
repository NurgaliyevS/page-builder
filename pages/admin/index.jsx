import React, { useState, useEffect } from "react";
import HeaderAdmin from "./components/HeaderAdmin";
import Constructor from "./components/Constructor";
import PhoneMockup from "./components/PhoneMockup";
import { useSession } from "next-auth/react";
import Products from "./components/Products";
import axios from "axios";
import FirstStep from "./FirstStep";
import { toast } from "react-toastify";
import PreviewButton from "./components/PreviewButton";
import { useRouter } from "next/router";

function Admin() {
  const { data: session } = useSession();
  const router = useRouter()

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
        id: "",
        productURL: "",
        productName: "",
        productDescription: "",
        productStage: "",
      },
    ],
  });

  const [accordionState, setAccordionState] = useState({
    constructor: true,
    products: false,
  });

  const [landingPageId, setLandingPageId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingButton, setIsLoadingButton] = useState(false);

  const isInitialMount = React.useRef(false);

  useEffect(() => {
    if (!isInitialMount.current) {
      if (session?.user) {
        isInitialMount.current = true;
        fetchLandingPage();
      }
    }
  }, [session]);

  const fetchLandingPage = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/admin/landing-page", {
        params: { userId: session.user.id },
      });
      if (response.data && response.data.length > 0) {
        const landingPage = response.data[0];
        setLandingPageId(landingPage._id);
        setPageContent((prevContent) => ({
          ...prevContent,
          ...landingPage.content,
          customizations: landingPage.customizations,
        }));
        setProductContent((prevProduct) => ({
          ...prevProduct,
          isOpenProduct: landingPage?.content?.isOpenProduct,
        }));
        if (landingPage?.content?.products?.length) {
          setProductContent((prevProduct) => ({
            ...prevProduct,
            products: [...landingPage.content.products],
          }));
        }
        if (landingPage?.content?.isOpenProduct) {
          toggleAccordion("products");
        }
      }
    } catch (error) {
      console.error("Error fetching landing page:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdate = (updates) => {
    setPageContent((prevContent) => ({ ...prevContent, ...updates }));
  };

  const handleUpdateProduct = (updates) => {
    setProductContent((prevContent) => ({ ...prevContent, ...updates }));
  };

  const toggleAccordion = (section) => {
    setAccordionState((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleSubmit = async () => {
    setIsLoadingButton(true);
    const landingPageData = {
      userId: session.user.id,
      title: pageContent.mainHeadline,
      description: pageContent.mainDescription,
      template: "default",
      content: {
        ...pageContent,
        isOpenProduct: productContent.isOpenProduct,
        products: [...productContent.products],
      },
    };

    try {
      if (landingPageId) {
        // Update existing landing page
        const response = await axios.put(
          `/api/admin/landing-page?id=${landingPageId}`,
          landingPageData
        );
        if (response.status === 200) {
          toast("Landing page updated successfully");
          if (response?.data?.userPlan && response?.data?.userPlan === "free") {
            if (response?.data?.landingPage?.personalLink) {
              router.push(`/${response.data.landingPage.personalLink}`);
            }
          }
        }
      }
    } catch (error) {
      console.error("Error submitting landing page:", error);
    } finally {
      setIsLoadingButton(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100">
        <HeaderAdmin />
        <div className="md:flex p-4 h-full max-w-7xl mx-auto overflow-auto">
          <div className="max-w-3xl mx-auto md:basis-3/5 space-y-4 overflow-y-auto pb-44">
            <div className="card bg-white shadow-lg animate-pulse">
              <div className="card-body">
                <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              </div>
            </div>
            <div className="card bg-white shadow-lg animate-pulse">
              <div className="card-body">
                <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              </div>
            </div>
            <div className="animate-pulse">
              <div className="h-10 bg-gray-300 rounded w-full"></div>
            </div>
          </div>
          <div className="hidden md:block md:basis-2/5 mx-auto max-w-sm">
            <div className="h-8 bg-gray-300 rounded w-1/2 mb-4"></div>
            <div className="h-96 bg-gray-300 rounded w-full"></div>
          </div>
        </div>
      </div>
    );
  }

  if (landingPageId === null && !isLoading) {
    return (
      <div className="min-h-screen bg-gray-100">
        <HeaderAdmin disabledPublish={true} />
        <div className="md:flex p-4 h-full max-w-7xl mx-auto overflow-auto">
          <div className="max-w-3xl mx-auto md:basis-3/5 space-y-4 overflow-y-auto pb-44">
            <FirstStep
              session={session}
              setLandingPageId={setLandingPageId}
              onLandingPageCreated={fetchLandingPage}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderAdmin handleSubmit={handleSubmit} />
      <div className="md:flex p-4 h-full max-w-7xl mx-auto overflow-auto">
        <PreviewButton
          content={pageContent}
          product={productContent}
          customizations={pageContent?.customizations}
        />
        <div className="max-w-3xl mx-auto md:basis-3/5 space-y-4 overflow-y-auto pb-44">
          <div className="card bg-white shadow-lg">
            <div className="card-body">
              <button
                className="text-xl font-bold mb-2 w-full text-left flex justify-between items-center"
                onClick={() => toggleAccordion("constructor")}
              >
                Page Constructor
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    accordionState.constructor ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {accordionState.constructor && (
                <Constructor onUpdate={handleUpdate} content={pageContent} />
              )}
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <button
                className="text-xl font-bold mb-2 w-full text-left flex justify-between items-center"
                onClick={() => {
                  toggleAccordion("products");
                  setProductContent((prevContent) => ({
                    ...prevContent,
                    isOpenProduct: !accordionState.products,
                  }));
                }}
              >
                Product Constructor
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    accordionState.products ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {accordionState.products && (
                <Products
                  onUpdate={handleUpdateProduct}
                  product={productContent}
                />
              )}
            </div>
          </div>

          <button
            className="btn btn-primary w-full"
            onClick={handleSubmit}
            disabled={isLoadingButton}
          >
            Submit
          </button>
        </div>

        <div className="hidden md:block md:basis-2/5 mx-auto max-w-sm">
          <h2 className="text-2xl font-semibold mb-4">Preview</h2>
          <PhoneMockup
            content={pageContent}
            product={productContent}
            customizations={pageContent?.customizations}
          />
        </div>
      </div>
    </div>
  );
}

export default Admin;
