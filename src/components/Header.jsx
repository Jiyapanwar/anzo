import React from "react";
import "remixicon/fonts/remixicon.css";

const Header = () => {
  return (
    <div className="fixed absolute w-full flex items-center justify-end z-10 p-17">
      <button className="text-white bg-black border-4  px-6 py-2  hover:bg-gray-500 rounded-full">
        Hire me
      </button>
      <i className="ri-more-2-fill text-3xl text-white ml-2"></i>
    </div>
  );
};

export default Header;
