import React, { useState } from "react";
import shortUUID from 'short-uuid';

function Products({ onUpdate, product }) {
  // Initialize products with IDs if they don't have them
  const initialProducts = product.products.map((p, index) => ({
    ...p,
    id: p.id || shortUUID.generate()
  }));

  // Initialize breadcrumbs based on products
  const initialBreadcrumbs = initialProducts.map((p, index) => ({
    id: p.id,
    number: index + 1
  }));

  const [breadcrumbs, setBreadcrumbs] = useState(initialBreadcrumbs);
  const [currentProductId, setCurrentProductId] = useState(initialProducts[0]?.id || null);

  // Update products if IDs were added
  if (JSON.stringify(initialProducts) !== JSON.stringify(product.products)) {
    onUpdate({ products: initialProducts });
  }

  const handleInputChange = (e, id) => {
    const { name, value } = e.target;
    const updatedProducts = product.products.map(p => 
      p.id === id ? { ...p, [name]: value } : p
    );
    onUpdate({ products: updatedProducts });
  };

  const addProduct = () => {
    const currentProduct = product.products.find(p => p.id === currentProductId) || {};
    if (!currentProduct.productURL || !currentProduct.productName) return;

    const newId = shortUUID.generate();
    const newNumber = breadcrumbs.length + 1;
    setBreadcrumbs([...breadcrumbs, { id: newId, number: newNumber }]);
    setCurrentProductId(newId);
    onUpdate({
      products: [
        ...product.products,
        {
          id: newId,
          productURL: "",
          productName: "",
          productDescription: "",
          productStage: "",
        },
      ],
    });
  };

  const switchToProduct = (id) => {
    setCurrentProductId(id);
  };

  const removeProduct = (id) => {
    const updatedBreadcrumbs = breadcrumbs.filter(b => b.id !== id);
    // Renumber the remaining products
    const renumberedBreadcrumbs = updatedBreadcrumbs.map((crumb, index) => ({
      ...crumb,
      number: index + 1
    }));
    setBreadcrumbs(renumberedBreadcrumbs);
    const updatedProducts = product.products.filter(p => p.id !== id);
    onUpdate({ products: updatedProducts });
    if (currentProductId === id) {
      setCurrentProductId(renumberedBreadcrumbs[0]?.id || null);
    }
  };

  const currentProduct = product.products.find(p => p.id === currentProductId) || {};
  const canAddProduct = !!currentProduct.productURL && !!currentProduct.productName;

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 mb-4">
        <div className="breadcrumbs max-w-xs lg:max-w-full text-sm">
          <ul>
            {breadcrumbs.map((crumb) => (
              <li key={crumb.id}>
                <button
                  className={`${
                    crumb.id === currentProductId ? "text-primary" : ""
                  }`}
                  onClick={() => switchToProduct(crumb.id)}
                >
                  Product {crumb.number}
                </button>
                {breadcrumbs.length > 1 && (
                  <button
                    onClick={() => removeProduct(crumb.id)}
                    className="btn btn-ghost btn-xs ml-2"
                    aria-label="Remove product"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
        <button 
          onClick={addProduct} 
          className={`btn btn-circle btn-sm ${canAddProduct ? '' : 'btn-disabled'}`}
          disabled={!canAddProduct}
        >
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
            htmlFor={`productURL-${currentProductId}`}
            className="label"
          >
            <span className="label-text">Product URL</span>
          </label>
          <input
            type="text"
            id={`productURL-${currentProductId}`}
            name="productURL"
            placeholder="https://"
            value={currentProduct.productURL || ""}
            onChange={(e) => handleInputChange(e, currentProductId)}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label
            htmlFor={`productName-${currentProductId}`}
            className="label"
          >
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            id={`productName-${currentProductId}`}
            name="productName"
            placeholder="Product Name"
            value={currentProduct.productName || ""}
            onChange={(e) => handleInputChange(e, currentProductId)}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label
            htmlFor={`productDescription-${currentProductId}`}
            className="label"
          >
            <span className="label-text">Product Description</span>
          </label>
          <input
            type="text"
            id={`productDescription-${currentProductId}`}
            name="productDescription"
            placeholder="Product Description"
            value={currentProduct.productDescription || ""}
            onChange={(e) => handleInputChange(e, currentProductId)}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label
            htmlFor={`productStage-${currentProductId}`}
            className="label"
          >
            <span className="label-text">Product Stage</span>
          </label>
          <select
            id={`productStage-${currentProductId}`}
            name="productStage"
            value={currentProduct.productStage || ""}
            onChange={(e) => handleInputChange(e, currentProductId)}
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
