import React from "react";
import { useNavigate } from "react-router-dom";

const ThankYou = ({ onClose }) => {
  const navigate = useNavigate();
  const close = () => {
    navigate("/");
  };

  return (
    <div className="bg-green-50 p-6 rounded-lg w-full max-w-md mx-auto text-center relative">
      <div className="flex justify-between items-center mb-4 text-lg font-bold">
        <span>Your Cart</span>
        <button className="text-xl" onClick={close}>
          ✕
        </button>
      </div>

      <div>
        <h1 className="text-green-600 text-2xl my-2">Congratulations</h1>
        <h2 className="text-green-600 text-xl mb-4">Order Placed!</h2>

        <img
          src="https://res.cloudinary.com/dyutmmnia/image/upload/v1729312625/cogkewer4hcv6ns8ccwy.png" // Replace with actual image URL
          alt="Plant"
          className="w-24 h-24 mx-auto my-5"
        />

        <p className="text-green-600 text-base mb-4 leading-relaxed">
          Thank you for choosing Chaperone services.
          <br />
          We will soon get in touch with you!
        </p>

        <button className="bg-green-900 text-white py-3 px-5 rounded-md w-full hover:bg-green-700">
          CONTINUE SHOPPING
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
