import React from "react";
import { PiDotsThreeOutlineFill } from "react-icons/pi";

const FormLayout = ({ children, handleSubmit, title, subTitle }) => {
  return (
    <div className="w-full p-4 grid place-items-center mb-12">
      <form
        className="form w-full"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-end">
          <div className="min-w-[32px] min-h-[32px] rounded-full grid place-items-center bg-[#dfebdf] cursor-pointer">
            <PiDotsThreeOutlineFill
              fill="green"
              fontSize={24}
            />
          </div>
        </div>
        <h1 className="mb-[40px] mt-4 font-[800] text-[34px] leading-[40px]">
          {title}
        </h1>
        {subTitle && <p className="mb-4 text-sm">{subTitle}</p>}
        <div>{children}</div>
      </form>
    </div>
  );
};

export default FormLayout;
