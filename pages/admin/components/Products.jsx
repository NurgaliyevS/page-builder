import React from "react";

function Products({ onUpdate, product }) {
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "isOpenProduct") {
      onUpdate({ [name]: type === "checkbox" ? checked : value });
    } else {
      onUpdate({
        products: [
          {
            ...product?.products[0],
            [name]: value
          }
        ]
      });
    }
  };

  return (
    <div className="space-y-4">
      <div className={`space-y-4 overflow-hidden transition-all duration-300 max-h-96`}>
        <div className="form-control">
          <label htmlFor="productURL" className="label">
            <span className="label-text">Product URL</span>
          </label>
          <input
            type="text"
            id="productURL"
            name="productURL"
            placeholder="https://"
            value={product?.products[0]?.productURL}
            onChange={handleInputChange}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label htmlFor="productName" className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            placeholder="Product Name"
            value={product?.products[0]?.productName}
            onChange={handleInputChange}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label htmlFor="productDescription" className="label">
            <span className="label-text">Product Description</span>
          </label>
          <input
            type="text"
            id="productDescription"
            name="productDescription"
            placeholder="Product Description"
            value={product?.products[0].productDescription}
            onChange={handleInputChange}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label htmlFor="productStage" className="label">
            <span className="label-text">Product Stage</span>
          </label>
          <select
            id="productStage"
            name="productStage"
            value={product?.products[0].productStage}
            onChange={handleInputChange}
            className="select select-bordered w-full"
          >
            <option value="">
              Select product stage
            </option>
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
