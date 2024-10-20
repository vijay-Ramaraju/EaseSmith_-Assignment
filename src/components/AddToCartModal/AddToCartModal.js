import React from "react";
import "./AddToCartModal.css";

const AddToCartModal = ({ product, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <div className="modal-actions">
          <button onClick={onClose}>Close</button>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default AddToCartModal;
