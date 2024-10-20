import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ onClose }) => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const close = () => {
    navigate("/");
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(items);
  }, []);

  // Remove from the cart item
  const removeFromCart = (indexToRemove) => {
    const updatedCartItems = cartItems.filter(
      (_, index) => index !== indexToRemove
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <div className="fixed top-0 right-0 w-full md:w-1/3 bg-white p-6 shadow-lg h-full z-50 overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        <div className="bi bi-x-lg cursor-pointer text-xl" onClick={close}>X</div>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center mb-4 p-4 bg-gray-100 rounded-lg"
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-16 h-16 rounded-lg"
              />
              <div className="flex-1 ml-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <p className="text-sm text-red-500 line-through">
                  Original Price: ₹ {item.originalPrice}
                </p>
                <p className="text-sm text-green-600 font-semibold">
                  Discounted Price: ₹ {item.discountedPrice}
                </p>
              </div>
              <button
                className="bg-red-500 text-white w-8 h-8 rounded-full flex justify-center items-center"
                onClick={() => removeFromCart(index)}
              >
                X
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
