import React from "react";

type AdType = {
  id: number;
  title: string;
  image: string;
};

export default function AdDetail({ selectedAd }: { selectedAd: AdType }) {
  return (
    <div className="px-[28px]">
      <div className="lg:grid lg:grid-cols-2 ">
        <div className="w-full">
          <img
            src={selectedAd.image}
            alt={selectedAd.title}
            className="lg:w-[90%] lg:h-auto"
          />
        </div>
        <div>
          <div className="mb-[20px]">
            <p className="dashboard-question"> Ad Title</p>
            <h1 className="text-medium text-[20px] text-[#282A2C]">
              {selectedAd.title}
            </h1>
          </div>
          <div className="mb-[20px]">
            <p className="dashboard-question">External Link</p>
            <h1 className="text-medium text-[16px] text-[#282A2C]">
              www.rumieapp.com
            </h1>
          </div>
          <div className="mb-[20px]">
            <p className="dashboard-question">Visible to</p>
            <h1 className="text-medium text-[16px] text-[#282A2C]">
              Texas University, Houston University, UH Energy
            </h1>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center h-[50px] border border-[#E8E4F5] rounded-[8px] p-[8px] w-[158px]">
              <div>
                <p className="dashboard-question text-[12px]">Live Since</p>
                <h6 className="text-[#282A2C] text-[15px] text-medium">
                  2-Jul-2023
                </h6>
              </div>
              <div className="bg-[#E8E4F5] w-[44px] ml-[16px] h-[45px] text-center rounded-[8px]">
                <p className="text-[15px] text-bold">16 Days</p>
              </div>
            </div>
            <div className="border border-[#E8E4F5]  rounded-[8px] p-[8px] h-[50px] flex justify-center items-center">
              <div>
                <p className="text-[12px]">Monthly Budget</p>
                <p className="text-[16px]">$100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
