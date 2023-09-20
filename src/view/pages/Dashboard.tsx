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
        <div className="dashbaord-shadow rounded-[16px] lg:mx-[40px] xl:mx-[60px]">
          <div className="lg:grid  lg:grid-cols-3">
            <div className="p-[30px] bg-white rounded-[16px] mx-6 lg:col-span-2">
              <DashboardHeader />
              <hr className="mt-[16px] mb-[26px] border-r border-r-[#E8E4F5]" />
              <div className="grid sm:grid-cols-2 lg:grid-cols-3">
                {AdData.map((ad, index) => (
                  <div
                    key={index}
                    className="pr-[29px] mb-[16px] cursor-pointer"
                    onClick={() => setSelectedAd(ad)}
                  >
                    <img
                      src={ad.image}
                      alt={ad.title}
                      className="w-full rounded-[16px]"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="py-[30px] rounded-[16px] bg-white">
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
