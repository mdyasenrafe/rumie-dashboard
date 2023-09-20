import React from "react";
import { HeaderData } from "../../../data/dashboard/HeaderData";

export default function DashboardHeader() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex w-2/4">
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
      <div className="flex items-center justify-between w-2/4">
        {HeaderData.map((item, index) => (
          <div className="border-r-[1px] border-[#E8E4F5] px-[16px]">
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
