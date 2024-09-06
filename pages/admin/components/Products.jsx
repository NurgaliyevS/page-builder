import React, { useState } from "react";

function Products({ onUpdate, product }) {
  const [breadcrumbs, setBreadcrumbs] = useState([1]);

  const handleInputChange = (e, index) => {
    const { name, value, type, checked } = e.target;
    const updatedProducts = [...product.products];
    if (!updatedProducts[index]) {
      updatedProducts[index] = {};
    }
    updatedProducts[index] = {
      ...updatedProducts[index],
      [name]: value,
    };
    onUpdate({ products: updatedProducts });
  };

  const addProduct = () => {
    setBreadcrumbs([...breadcrumbs, breadcrumbs.length + 1]);
    onUpdate({
      products: [
        ...product.products,
        {
          productURL: "",
          productName: "",
          productDescription: "",
          productStage: "",
        },
      ],
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 mb-4">
        <div className="breadcrumbs max-w-xs text-sm">
          <ul>
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb}>
                <button
                  className={`${
                    index === breadcrumbs.length - 1 ? "text-primary" : ""
                  }`}
                  onClick={() => setBreadcrumbs(breadcrumbs.slice(0, index + 1))}
                >
                  Product {crumb}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <button onClick={addProduct} className="btn btn-circle btn-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
      <div
        className={`space-y-4 overflow-hidden transition-all duration-300 max-h-96`}
      >
        <div className="form-control">
          <label
            htmlFor={`productURL-${breadcrumbs.length - 1}`}
            className="label"
          >
            <span className="label-text">Product URL</span>
          </label>
          <input
            type="text"
            id={`productURL-${breadcrumbs.length - 1}`}
            name="productURL"
            placeholder="https://"
            value={product?.products[breadcrumbs.length - 1]?.productURL || ""}
            onChange={(e) => handleInputChange(e, breadcrumbs.length - 1)}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label
            htmlFor={`productName-${breadcrumbs.length - 1}`}
            className="label"
          >
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            id={`productName-${breadcrumbs.length - 1}`}
            name="productName"
            placeholder="Product Name"
            value={product?.products[breadcrumbs.length - 1]?.productName || ""}
            onChange={(e) => handleInputChange(e, breadcrumbs.length - 1)}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label
            htmlFor={`productDescription-${breadcrumbs.length - 1}`}
            className="label"
          >
            <span className="label-text">Product Description</span>
          </label>
          <input
            type="text"
            id={`productDescription-${breadcrumbs.length - 1}`}
            name="productDescription"
            placeholder="Product Description"
            value={
              product?.products[breadcrumbs.length - 1]?.productDescription ||
              ""
            }
            onChange={(e) => handleInputChange(e, breadcrumbs.length - 1)}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label
            htmlFor={`productStage-${breadcrumbs.length - 1}`}
            className="label"
          >
            <span className="label-text">Product Stage</span>
          </label>
          <select
            id={`productStage-${breadcrumbs.length - 1}`}
            name="productStage"
            value={
              product?.products[breadcrumbs.length - 1]?.productStage || ""
            }
            onChange={(e) => handleInputChange(e, breadcrumbs.length - 1)}
            className="select select-bordered w-full"
          >
            <option value="">Select product stage</option>
            <option value="development">Development</option>
            <option value="testing">Testing</option>
            <option value="production">Production</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Products;
