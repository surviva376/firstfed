import React from "react";

const Button = ({ title }) => {
  return (
    <button className="my-5 py-[14px] px-6 bg-[green] font-[800] rounded-[100px] text-center text-white w-full">
      {title}
    </button>
  );
};

export default Button;
