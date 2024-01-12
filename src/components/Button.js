import React from "react";

export const Button = (props) => {
  const { text } = props;
  return (
    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md sm:p-2 p-1 max-sm:p-0 font-medium text-white ">
      {text}
    </button>
  );
};
