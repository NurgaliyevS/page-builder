import React, { useState } from "react";

function Products({ onUpdate, product }) {
  const [breadcrumbs, setBreadcrumbs] = useState([1]);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
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
    const newIndex = breadcrumbs.length;
    setBreadcrumbs([...breadcrumbs, newIndex + 1]);
    setCurrentProductIndex(newIndex);
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

  const switchToProduct = (index) => {
    setCurrentProductIndex(index);
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
                    index === currentProductIndex ? "text-primary" : ""
                  }`}
                  onClick={() => switchToProduct(index)}
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
            htmlFor={`productURL-${currentProductIndex}`}
            className="label"
          >
            <span className="label-text">Product URL</span>
          </label>
          <input
            type="text"
            id={`productURL-${currentProductIndex}`}
            name="productURL"
            placeholder="https://"
            value={product?.products[currentProductIndex]?.productURL || ""}
            onChange={(e) => handleInputChange(e, currentProductIndex)}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label
            htmlFor={`productName-${currentProductIndex}`}
            className="label"
          >
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            id={`productName-${currentProductIndex}`}
            name="productName"
            placeholder="Product Name"
            value={product?.products[currentProductIndex]?.productName || ""}
            onChange={(e) => handleInputChange(e, currentProductIndex)}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label
            htmlFor={`productDescription-${currentProductIndex}`}
            className="label"
          >
            <span className="label-text">Product Description</span>
          </label>
          <input
            type="text"
            id={`productDescription-${currentProductIndex}`}
            name="productDescription"
            placeholder="Product Description"
            value={
              product?.products[currentProductIndex]?.productDescription ||
              ""
            }
            onChange={(e) => handleInputChange(e, currentProductIndex)}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label
            htmlFor={`productStage-${currentProductIndex}`}
            className="label"
          >
            <span className="label-text">Product Stage</span>
          </label>
          <select
            id={`productStage-${currentProductIndex}`}
            name="productStage"
            value={
              product?.products[currentProductIndex]?.productStage || ""
            }
            onChange={(e) => handleInputChange(e, currentProductIndex)}
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
