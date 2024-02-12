import React from "react";

const Input = ({ title, isError, isWrong = false, children, ...rest }) => {
  return (
    <div className="w-full relative cursor-pointer mb-5">
      <label className="absolute text-sm left-4 top-[10px]">{title}</label>
      <input
        type="text"
        className={`cursor-pointer bg-[#f2f2f2] rounded-[24px] w-full border-[2px] ${
          isError || isWrong ? "border-[#ce1616]" : "border-[#f2f2f2]"
        } focus:border-[green]`}
        style={{ padding: "28px 16px 5px" }}
        required
        {...rest}
      />
      {children ? children : null}
    </div>
  );
};

export default Input;
