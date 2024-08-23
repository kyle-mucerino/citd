// CustomArrow.js
import React from "react";
import { BsCaretRightFill } from "react-icons/bs";

const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 p-4"
  >
    <BsCaretRightFill className="text-white text-4xl rotate-180" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 p-4"
  >
    <BsCaretRightFill className="text-white text-4xl" />
  </button>
);

export { CustomPrevArrow, CustomNextArrow };
