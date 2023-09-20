import React from "react";
import { HeaderData } from "../../data/dashboard/HeaderData";
import Layout from "../components/layout/Layout";
import DashboardHeader from "../components/dashboard/DashboardHeader";

export default function Dashboard() {
  return (
    <Layout>
      <div className="bg-[#F4F6F9] py-[90px]">
        <div className="container dashbaord-shadow bg-[white] py-[30px] rounded-[16px]">
          <DashboardHeader />
          <hr className="mt-[16px] mb-[26px] border-r border-r-[#E8E4F5]" />
          <div></div>
        </div>
      </div>
    </Layout>
  );
}
