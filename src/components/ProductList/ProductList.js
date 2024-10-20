import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Filters from "../Filter/Filter";
import CartPage from "../Cart/CartModel";

const ProductList = () => {
  const navigate = useNavigate();

  const thankyou = () => {
    navigate("./thankyou");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [cart, setCart] = useState([]);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const addToCart = () => {
    if (selectedProduct) {
      setCart((prevCart) => [...prevCart, selectedProduct]); 
      console.log(`${selectedProduct.name} added to cart!`);
    }
    closeModal();
  };

  // Sample products data
  const products = [
    {
      id: 1,
      name: "Monstera",
      description: "Indoor Plant, Low maintenance",
      rating: 4.9,
      originalPrice: 359,
      discountedPrice: 299,
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303663/b6hamfzkwu0lnmzv58g6.png", // Replace with the correct image path
    },
    {
      id: 2,
      name: "Monstera",
      description: "Indoor Plant, Low maintenance",
      rating: 4.9,
      originalPrice: 359,
      discountedPrice: 299,
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303662/twyn1jtbenhtbnnjguo8.png", // Replace with the correct image path
    },
    {
      id: 3,
      name: "Monstera",
      description: "Indoor Plant, Low maintenance",
      rating: 4.9,
      originalPrice: 359,
      discountedPrice: 299,
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303656/ptxdmop4wepzaloormio.png", // Replace with the correct image path
    },
    {
      id: 4,
      name: "Monstera",
      description: "Indoor Plant, Low maintenance",
      rating: 4.9,
      originalPrice: 359,
      discountedPrice: 299,
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303663/b6hamfzkwu0lnmzv58g6.png", // Replace with the correct image path
    },
    {
      id: 5,
      name: "Monstera",
      description: "Indoor Plant, Low maintenance",
      rating: 4.9,
      originalPrice: 359,
      discountedPrice: 299,
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303662/twyn1jtbenhtbnnjguo8.png", // Replace with the correct image path
    },
    {
      id: 6,
      name: "Monstera",
      description: "Indoor Plant, Low maintenance",
      rating: 4.9,
      originalPrice: 359,
      discountedPrice: 299,
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303656/ptxdmop4wepzaloormio.png", // Replace with the correct image path
    },
    {
      id: 7,
      name: "Monstera",
      description: "Indoor Plant, Low maintenance",
      rating: 4.9,
      originalPrice: 359,
      discountedPrice: 299,
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303663/b6hamfzkwu0lnmzv58g6.png", // Replace with the correct image path
    },
    {
      id: 8,
      name: "Monstera",
      description: "Indoor Plant, Low maintenance",
      rating: 4.9,
      originalPrice: 359,
      discountedPrice: 299,
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303662/twyn1jtbenhtbnnjguo8.png", // Replace with the correct image path
    },
    {
      id: 9,
      name: "Monstera",
      description: "Indoor Plant, Low maintenance",
      rating: 4.9,
      originalPrice: 359,
      discountedPrice: 299,
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303656/ptxdmop4wepzaloormio.png", // Replace with the correct image path
    },
  ];

  const nurseries = [
    {
      id: 1,
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   ",
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303047/bbbyisdmjr37eyqhmfgl.png", // Replace with the correct image path
    },
    {
      id: 2,
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   ",
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303120/b57gmhqbvm7tvq4ot7qn.png", // Replace with the correct image path
    },
    {
      id: 3,
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   ",
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303127/m8afy8wymd8blzs7fxbq.png", // Replace with the correct image path
    },
    {
      id: 4,
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   ",
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303127/qepwej0rg0n6wochhh3f.png", // Replace with the correct image path
    },
    {
      id: 5,
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   ",
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303047/bbbyisdmjr37eyqhmfgl.png", // Replace with the correct image path
    },
    {
      id: 6,
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   ",
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303127/m8afy8wymd8blzs7fxbq.png", // Replace with the correct image path
    },
    {
      id: 7,
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   ",
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303127/qepwej0rg0n6wochhh3f.png", // Replace with the correct image path
    },
    {
      id: 8,
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   ",
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303047/bbbyisdmjr37eyqhmfgl.png", // Replace with the correct image path
    },
  ];

  return (
    <div className="product-list w-full p-5">
      <div className="flex gap-3 mb-4 items-center">
        <button className="bg-green-900 text-white py-2 px-4 rounded w-auto flex-none">
          Plants
        </button>
        <button className="border border-gray-300 text-gray-800 py-2 px-4 rounded w-auto flex-none">
          Pots
        </button>
      </div>

      <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet...</p>

      {/* Nursery Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Nursery</h2>
        <div className="flex overflow-x-auto gap-5">
          {nurseries.map((nursery) => (
            <div
              key={nursery.id}
              className="shadow-md p-2 text-center min-w-[150px] sm:min-w-[200px] max-w-[200px]"
            >
              <img
                src={nursery.imageUrl}
                alt={nursery.name}
                className="rounded-full w-32 h-32 sm:w-40 sm:h-40 object-cover mx-auto mb-2 "
              />

              <p className="text-sm sm:text-md text-gray-600">
                {nursery.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Product Header */}
      <div className="flex justify-between items-center">
        {/* Product Grid */}
        <div className="column-filter-plants flex flex-col lg:flex-row">
          {/* Filter Section */}
          <div className="filter-row mb-6 lg:mb-0 lg:mr-6">
            <Filters />
          </div>

          {/* Products Grid */}
          <div className="flex flex-col gap-8 ">
            <div className="product-header flex justify-start items-center gap-4 mb-6">
              <span className="text-lg">{products.length} products</span>
              <select className="sort-by py-2 px-4 bg-green-900 text-white rounded">
                <option>Sort by</option>
                <option>Popularity</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="product-card p-6 bg-white shadow rounded-lg"
                >
                  <div className="border border-gray-200 p-3 rounded mb-4">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-green-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="rating text-yellow-500 mb-2">
                    ⭐⭐⭐⭐⭐ {product.rating}
                  </div>
                  <div className="price-section flex items-center mb-4">
                    <span className="text-gray-500 line-through mr-2">
                      ₹ {product.originalPrice}
                    </span>
                    <span className="text-lg font-bold text-green-900">
                      ₹ {product.discountedPrice}
                    </span>
                  </div>
                  <div className="action-buttons flex space-x-2">
                    <button
                      className="add-to-cart-btn bg-green-900 text-white py-2 px-4 rounded-2xl w-full"
                      onClick={() => openModal(product)}
                    >
                      - Add to cart +
                    </button>
                    <button className="buy-on-rent-btn text-green-900 border border-green-900 py-2 px-4 rounded w-full">
                      Buy on Rent
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
        {/* View More Button */}
        <div className="flex justify-center mt-6">
          <button className="add-to-cart-btn bg-green-900 text-white py-3 px-9 rounded-3xl">
            View More
          </button>
        </div>
      
      {/* Modal */}
      {isModalOpen && (
        <CartPage
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={closeModal}
          onAddToCart={addToCart}
        />
      )}
    </div>
  );
};

export default ProductList;
