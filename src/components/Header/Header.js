import React from "react";
import { Link } from "react-router-dom";
import "../ProductList/ProductList";

function Header() {
  return (
    <header className="w-full border-b border-gray-300 font-sans">
      <div className="flex flex-col md:flex-row justify-around md:justify-between items-center py-2 px-4 bg-green-900 text-white text-sm">
        <div className="mb-2 md:mb-0">
          <h1 className="font-semibold">
            Free Shipping on orders above 999/-{" "}
          </h1>
        </div>
        <div className="font-semibold">Call us on: +91 98768 05120</div>
      </div>

      <div className="px-5">
        <div className="flex flex-col md:flex-row items-center justify-between py-4 px-4 bg-white">
          {/* Logo Section */}
          <div className="flex items-center">
            <img
              src="https://res.cloudinary.com/dyutmmnia/image/upload/v1729254543/vkoww9bqc167jh2nizd8.png"
              alt="Chaperone Plants Logo"
              className="h-12 mr-2"
            />
            <h1 className="text-2xl font-bold text-green-900">Chaperone</h1>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center mt-4 md:mt-0">
            <Link
              to="/"
              className="mx-2 lg:mx-4 text-gray-800 text-lg hover:text-orange-500"
            >
              Home
            </Link>
            <Link
              to="/plants-pots"
              className="mx-2 lg:mx-4 text-gray-800 text-lg hover:text-orange-500"
            >
              Plants & Pots
            </Link>
            <div className="relative group">
              <Link
                to="/tools"
                className="mx-2 lg:mx-4 text-gray-800 text-lg hover:text-orange-500"
              >
                Tools
              </Link>
              <div className="absolute hidden group-hover:block bg-white shadow-lg z-10">
                <Link
                  to="/tools/item1"
                  className="block py-2 px-4 text-gray-800 hover:bg-gray-100 whitespace-nowrap"
                >
                  Item 1
                </Link>
                <Link
                  to="/tools/item2"
                  className="block py-2 px-4 text-gray-800 hover:bg-gray-100"
                >
                  Item 2
                </Link>
              </div>
            </div>
            <Link
              to="/services"
              className="mx-2 lg:mx-4 text-gray-800 text-lg hover:text-orange-500"
            >
              Our Services
            </Link>
            <Link
              to="/blog"
              className="mx-2 lg:mx-4 text-gray-800 text-lg hover:text-orange-500"
            >
              Blog
            </Link>
            <Link
              to="/story"
              className="mx-2 lg:mx-4 text-gray-800 text-lg hover:text-orange-500"
            >
              Our Story
            </Link>
            <Link
              to="/faqs"
              className="mx-2 lg:mx-4 text-gray-800 text-lg hover:text-orange-500"
            >
              FAQs
            </Link>
          </nav>

          {/* Mobile Nav Button */}
          <div className="block md:hidden mt-4">
            <button className="text-gray-800 focus:outline-none">☰</button>
          </div>

          {/* Profile and Cart Icons */}
          <div className="flex items-center space-x-5 mt-4 md:mt-0">
            <div className="flex flex-col items-center">
              
                <span>Profile</span>
              
            </div>
            <div className="flex flex-col items-center relative">
              <Link to="/cart" className="text-2xl">
                <span>Cart</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center my-5 px-4">
          <i className="bi bi-search absolute ml-4 text-gray-500"></i>
          <input
            type="text"
            placeholder="Search Plant"
            className="w-full max-w-lg py-2 pl-10 pr-10 text-lg border-b border-gray-400 rounded-tl-full rounded-tr-full focus:border-gray-800 outline-none"
          />
          <img
            src="https://res.cloudinary.com/dyutmmnia/image/upload/v1729309455/tboggpdt6hlf18iynnwm.png"
            alt="plant"
            className="h-5 ml-3"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
