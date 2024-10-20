import React from "react";

const CartModal = ({ product, onClose }) => {
  if (!product) return null;

  
  const onAddToCart = () => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push(product);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-white p-8 rounded-lg max-w-md w-full text-center">
        <h2 className="text-xl font-semibold mb-4">Add to Cart</h2>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-1/2 mx-auto mb-4"
        />
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="mb-4">{product.description}</p>
        <p className="mb-2">
          Original Price:{" "}
          <span className="line-through text-red-500">
            ₹ {product.originalPrice}
          </span>
        </p>
        <p className="mb-6">
          Discounted Price:{" "}
          <span className="text-green-600 font-bold">
            ₹ {product.discountedPrice}
          </span>
        </p>

        <div className="flex justify-between">
          <button
            onClick={onAddToCart}
            className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500"
          >
            Confirm
          </button>
          <button
            onClick={onClose}
            className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-500"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
