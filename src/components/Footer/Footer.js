import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-50 py-10 px-5 text-gray-700">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
        <div className="mb-6 w-full md:w-auto md:mb-0">
          <h3 className="text-lg font-bold mb-4">
            SUBSCRIBE TO OUR NEWSLETTER
          </h3>
          <p className="text-sm mb-4">
            Lorem Ipsum Dolor Sit Amet. Aut Ipsum Illum Et Nostrum Quidem Aut
            Necesbus Enim.
          </p>
          <div className="flex flex-col sm:flex-row items-center">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="p-2 border border-gray-300 rounded-md focus:outline-none mb-2 sm:mb-0 sm:mr-2 flex-grow"
            />
            <button className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-500">
              SUBSCRIBE
            </button>
          </div>
        </div>

        <div className="mb-6 w-full md:w-auto md:mb-0">
          <h3 className="text-lg font-bold mb-4">ABOUT US</h3>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-green-600">Our Story</li>
            <li className="cursor-pointer hover:text-green-600">Blogs</li>
            <li className="cursor-pointer hover:text-green-600">Careers</li>
            <li className="cursor-pointer hover:text-green-600">Contact Us</li>
            <li className="cursor-pointer hover:text-green-600">
              Help & Support
            </li>
          </ul>
        </div>

        <div className="mb-6 w-full md:w-auto md:mb-0">
          <h3 className="text-lg font-bold mb-4">OUR SERVICES</h3>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-green-600">Book Maali</li>
            <li className="cursor-pointer hover:text-green-600">
              Plant Day Care
            </li>
            <li className="cursor-pointer hover:text-green-600">Rent Plants</li>
            <li className="cursor-pointer hover:text-green-600">
              Plants & Pots
            </li>
            <li className="cursor-pointer hover:text-green-600">
              Gardening Tools
            </li>
          </ul>
        </div>

        <div className="mb-6 w-full md:w-auto md:mb-0">
          <h3 className="text-lg font-bold mb-4">USEFUL LINKS</h3>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-green-600">My Account</li>
            <li className="cursor-pointer hover:text-green-600">
              Orders & Returns
            </li>
            <li className="cursor-pointer hover:text-green-600">Track Order</li>
            <li className="cursor-pointer hover:text-green-600">
              Terms & Conditions
            </li>
            <li className="cursor-pointer hover:text-green-600">
              Privacy Policy
            </li>
          </ul>
        </div>

        <div className="mb-6 w-full md:w-auto md:mb-0">
          <h3 className="text-lg font-bold mb-4">GET IN TOUCH</h3>
          <p className="text-sm mb-2">
            Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57,
            Gurgaon, Haryana, India 122003
          </p>
          <p className="text-sm mb-2">Call: +919958287272</p>
          <p className="text-sm">Email: care@chaperoneplants.com</p>
        </div>
      </div>

      <div className="mt-10 pt-5 border-t border-gray-300">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center">
          <div className="mb-6 w-full md:w-auto md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-bold mb-2">CHAPERONE</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, aut ipsum illum et nostrum quidem aut
              necessitatibus.
            </p>
          </div>

          <div className="mb-6 w-full md:w-auto md:mb-0 text-center md:text-left">
            <p className="text-sm mb-2">Follow us on</p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <i className="bi bi-instagram text-2xl text-gray-600 hover:text-green-600 cursor-pointer"></i>
              <i className="bi bi-facebook text-2xl text-gray-600 hover:text-green-600 cursor-pointer"></i>
              <i className="bi bi-threads-fill text-2xl text-gray-600 hover:text-green-600 cursor-pointer"></i>
              <i className="bi bi-youtube text-2xl text-gray-600 hover:text-green-600 cursor-pointer"></i>
              <i className="bi bi-linkedin text-2xl text-gray-600 hover:text-green-600 cursor-pointer"></i>
            </div>
          </div>

          <div className="w-full md:w-auto text-center md:text-left">
            <p className="text-sm text-gray-500">
              © 2023, chaperone.com All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
