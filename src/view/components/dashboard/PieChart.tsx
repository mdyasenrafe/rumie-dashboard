import React from "react";
import { ClickedData } from "../../../data/dashboard/ClickedData";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, ChartDataLabels);

const colorScheme1 = ["#1F145E", "#FB8DB3", "#566FFE"];
const optionsData = [
  {
    id: 1,
    color: "#1F145E",
    label: "Male",
  },
  {
    id: 2,
    color: "#FB8DB3",
    label: "FeMale",
  },
  {
    id: 3,
    color: "#566FFE",
    label: "Other",
  },
];

export default function PieChart() {
  const genderData = {
    labels: ["Male", "Female", "Other"],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: ["#1F145E", "#FB8DB3", "#566FFE"],
        borderColor: ["#1F145E", "#FB8DB3", "#566FFE"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="mt-[50px] 2xl:grid lg:grid-cols-2">
      <div>
        <h1 className="text-[20px] text-medium text-[#3E4245] mb-[10px]">
          Gender Ratio
        </h1>

        <div className="lg:w-[70%] 2xl:w-[60%] flex mt-[20px] items-center mb-[16px]">
          <Doughnut data={genderData} />
          <div className="ml-[10px]">
            {optionsData.map((item, index) => (
              <div key={index} className="flex items-center mb-[10px]">
                <div
                  className="w-[8px] h-[8px] rounded-[8px] mr-[10px]"
                  style={{ backgroundColor: item.color }}
                ></div>
                <p className="text-[#485058] text-[14px] text-regular">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-medium text-[#485058] text-[20px] mb-[25px] ">
          Clicked By Universities
        </h1>
        <div>
          {ClickedData.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center mb-[10px] p-[10px] bg-[#F6F4FD] rounded-[7px]"
            >
              <div className="flex items-center">
                <p className="text-[#000000] text-[25px] text-medium mr-[12px]">
                  {item.id}
                </p>
                <p className="text-[#3E4245] text-[16px] text-regular">
                  {item.name}
                </p>
              </div>
              <div className="bg-[#FDFDFD] w-[42px] flex items-center h-[32px] justify-center rounded-[8px]">
                <p className="text-[16px] text-[#3E4245] text-regular">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
