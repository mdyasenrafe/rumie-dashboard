import React, { useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import AdStats from "./AdStats";
import PieChart from "./PieChart";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type AdType = {
  id: number;
  title: string;
  image: string;
};

export default function AdDetail({ selectedAd }: { selectedAd: AdType }) {
  const ExampleCustomInput = ({ value, onClick, title }: any) => (
    <div className="flex items-center mr-[10px]">
      <p className="text-[#6C6D70] text-regular text-[12px] mr-[6px]">From</p>
      <div
        className="border border-[#E8E4F5] w-[75px] h-[42px] rounded-[12px] justify-center flex items-center cursor-pointer"
        onClick={onClick}
      >
        <p className="text-[#3C3C3C] text-[14px] text-medium">From</p>
        <BiChevronDown className="text-[#8E00DB] text-[20px] ml-[6px]" />
      </div>
    </div>
  );

  const [formDate, setFormDate] = useState();
  const [endDate, setEndDate] = useState();

  return (
    <div className="px-[16px] 2xl:px-[28px]">
      <div className="lg:grid lg:grid-cols-2 ">
        <div className="w-full">
          <img
            src={selectedAd.image}
            alt={selectedAd.title}
            className=" w-full lg:w-[90%] lg:h-auto"
          />
        </div>
        <div>
          <div className="mb-[14px]">
            <p className="dashboard-question mt-[16px] lg:mt-0"> Ad Title</p>
            <h1 className="text-medium text-[20px] text-[#282A2C]">
              {selectedAd.title}
            </h1>
          </div>
          <div className="mb-[14px]">
            <p className="dashboard-question">External Link</p>
            <h1 className="text-medium text-[15px] text-[#282A2C]">
              www.rumieapp.com
            </h1>
          </div>
          <div className="mb-[14px]">
            <p className="dashboard-question">Visible to</p>
            <h1 className="text-medium text-[15px] text-[#282A2C]">
              Texas University, Houston University, UH Energy
            </h1>
          </div>
          <div className="flex justify-between items-center flex-wrap">
            <div className="flex justify-between items-center h-[50px] border border-[#E8E4F5] rounded-[8px] p-[8px] w-[158px]">
              <div>
                <p className="dashboard-question text-[12px]">Live Since</p>
                <h6 className="text-[#282A2C] text-[15px] text-medium">
                  2-Jul-2023
                </h6>
              </div>
              <div className="bg-[#E8E4F5] w-[44px] ml-[16px] h-[45px] text-center rounded-[8px]">
                <p className="text-[13px] text-bold">16 Days</p>
              </div>
            </div>
            <div className="border border-[#E8E4F5]  rounded-[8px] p-[8px] h-[50px] flex justify-center items-center mt-[8px]">
              <div>
                <p className="text-[12px] text-[#6C6D70]">Monthly Budget</p>
                <p className="text-[14px] text-regular text-[#282A2C]">$100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border border-[#E8E4F5] mt-[30px] mb-[40px]" />
      <div>
        <div className="lg:flex items-center justify-between ">
          <h1 className="text-[#3E4245] text-medium text-[20px] mb-[16px] lg:mb-[0px]">
            Performance Stats
          </h1>
          <div className="flex">
            <DatePicker
              selected={formDate}
              onChange={(date: any) => setFormDate(date)}
              customInput={<ExampleCustomInput title="Start" />}
            />

            <DatePicker
              selected={endDate}
              onChange={(date: any) => setEndDate(date)}
              customInput={<ExampleCustomInput title="End" />}
            />
          </div>
        </div>
      </div>
      <AdStats />
      <PieChart />
    </div>
  );
}
