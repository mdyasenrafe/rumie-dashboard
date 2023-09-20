import React from "react";
import { AdStatsData } from "../../../data/dashboard/AdStatsData";

export default function AdStats() {
  return (
    <div className=" mt-[40px] grid grid-cols-2 lg:grid-cols-4 gap-[12px]">
      {AdStatsData.map((item, index) => (
        <div
          key={index}
          className={`bg-[${item.bgColor}] p-[16px] rounded-[12px] mr-[12px] w-[100%]`}
        >
          <p className="text-[#6C6D70] text-[12px] text-regular">
            {item.title}
          </p>
          <p className="text-[#282A2C] text-medium text-[16px]">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
