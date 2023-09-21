import React from "react";
import { AdStatsData } from "../../../data/dashboard/AdStatsData";

export default function AdStats() {
  return (
    <div className=" mt-[40px] grid grid-cols-2 lg:grid-cols-4 gap-[12px]">
      {AdStatsData.map((item, index) => (
        <div
          key={index}
          className={`${
            item.id == 1
              ? "bg-[#D9CAFF]"
              : item.id == 2
              ? "bg-[#B5E9F9]"
              : item.id == 3
              ? "bg-[#FFE3C9]"
              : "bg-[#D3F3E2]"
          } p-[16px] rounded-[12px] mr-[12px] w-[100%]`}
        >
          <p className=" text-[#6C6D70] lg:text-[9px] 2xl:text-[12px] text-regular">
            {item.title}
          </p>
          <p className="text-[#282A2C] text-medium text-[16px]">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
