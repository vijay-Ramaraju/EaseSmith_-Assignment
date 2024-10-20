import React, { useState } from "react";

const Filters = () => {
  const [filters] = useState([
    "Type of Plants",
    "Price",
    "Nursery",
    "Ideal Plants Location",
    "Indoor/ Outdoor",
    "Maintenance",
    "Plant Size",
    "Water Schedule",
    "Color",
    "Seasonal",
    "Light Efficient",
  ]);

  return (
    <div className="bg-green-50 p-5 w-64 border border-gray-300 font-sans m-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Filter</h3>
        <button className="text-gray-500 uppercase text-sm hover:text-black">
          Clear All
        </button>
      </div>
      <ul className="list-none p-0 m-0">
        {filters.map((filter, index) => (
          <li
            key={index}
            className="flex justify-between items-center py-2 border-b border-gray-300 cursor-pointer hover:bg-green-100"
          >
            <span className="text-sm text-gray-800">{filter}</span>
            <span className="text-lg text-gray-500 hover:text-black">+</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
