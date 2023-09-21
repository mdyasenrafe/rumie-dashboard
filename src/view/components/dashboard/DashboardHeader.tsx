import React from "react";
import { HeaderData } from "../../../data/dashboard/HeaderData";

export default function DashboardHeader() {
  return (
    <div className="md:flex lg:flex-nowrap justify-between items-center">
      <div className="flex">
        <img
          className="w-[57px] h-[57px]"
          src="https://i.ibb.co/0rfJxxk/grammarly-2.png"
          alt="hero"
        />
        <div className="ms-[12px]">
          <h6 className="text-medium text-[#000000] text-[20px]">Grammarly</h6>
          <p className="text-regular text-[#282A2C]">reebok.abfrl.in</p>
        </div>
      </div>
      <div className="md:flex  flex-wrap md:flex-nowrap items-center justify-between 2xl:w-2/4">
        {HeaderData.map((item, index) => (
          <div
            className={`${
              index == 2
                ? ""
                : "md:border-r-[1px] md:border-[#E8E4F5] md:px-[16px] mt-[8px] md:mt-0"
            } `}
          >
            <p className="text-regular text-[#6C6D70] text-[12px]">
              {item.name}
            </p>
            <h5 className="text-medium text-[#282A2C] text-[14px]">
              {item.value}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}
