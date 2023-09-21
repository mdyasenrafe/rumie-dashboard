import React, { useState } from "react";
import { HeaderData } from "../../data/dashboard/HeaderData";
import Layout from "../components/layout/Layout";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import { AdData } from "../../data/dashboard/AdData";
import AdDetail from "../components/dashboard/AdDetail";

type AdType = {
  id: number;
  title: string;
  image: string;
};

export default function Dashboard() {
  const [selectedAd, setSelectedAd] = useState<AdType | null>(null);
  return (
    <Layout>
      <div className="bg-[#F4F6F9] py-[90px]">
        <div className="dashbaord-shadow rounded-[16px]  xl:mx-[30px] 2xl:mx-[60px]">
          <div className="lg:grid  lg:grid-cols-12">
            <div className="p-[30px] bg-white rounded-[16px] ms-6 lg:ms-0 mr-6 lg:col-span-7 ">
              <DashboardHeader />
              <hr className="mt-[16px] mb-[26px] border-r border-r-[#E8E4F5]" />
              <div className="grid sm:grid-cols-2 lg:grid-cols-3">
                {AdData.map((ad, index) => (
                  <div
                    key={index}
                    className="lg:pr-[16px] 2xl:pr-[29px] mb-[16px] cursor-pointer"
                    onClick={() => setSelectedAd(ad)}
                  >
                    <img
                      src={ad.image}
                      alt={ad.title}
                      className="w-full rounded-[16px] h-[100%]"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="py-[30px] rounded-[16px] bg-white mt-[24px] md:mt-0 mx-6 lg:mx-0 lg:col-span-5 ">
              {selectedAd ? (
                <AdDetail selectedAd={selectedAd} />
              ) : (
                <div className="px-[50px]">
                  <h1 className="text-[20px] text-regular text-[#3E4245]">
                    Please Select An Ad From The Left Panel To View Its
                    Performance Metrics
                  </h1>
                  <p className="text-[12px] font-[300] text-[#4D4D5B] pt-[14px]">
                    See how your ad performed this month and tweak its strategy
                    for better results.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
