import { LucideIcon } from "lucide-react";
import React from "react";

type StatDetail = {
  title: string;
  amount: string;
  changePercentage: number;
  IconComponent: LucideIcon;
};

type StatCardProps = {
  title: string;
  primaryIcon: JSX.Element;
  details: StatDetail[];
  dateRange: string;
};

const StatCard = ({
  title,
  primaryIcon,
  details,
  dateRange,
}: StatCardProps) => {
  const formatPercentage = (value: number) => {
    const signal = value >= 0 ? "+" : "";
    return `${signal}${value.toFixed()}%`;
  };

  const getChangeColor = (value: number) =>
    value >= 0 ? "text-green-500" : "text-red-500";

  return (
    <div className="md:row-span-1 xl:row-span-2 bg-white col-span-1 shadow-md rounded-2xl flex flex-col max-w-full h-full">
      {/* HEADER */}
      <div className="px-5 pt-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold text-lg text-gray-700">{title}</h2>
          <span className="text-xs text-gray-400">{dateRange}</span>
        </div>
        <hr />
      </div>

      {/* BODY */}
      <div className="flex flex-col flex-grow justify-center px-5 py-4">
        <div className="flex flex-wrap items-center justify-around gap-4">
          <div className="rounded-full p-5 bg-blue-50 border-sky-300 border-[1px]">
            {primaryIcon}
          </div>
          <div className="flex-1 min-w-[150px]">
            {details.map((detail, index) => (
              <React.Fragment key={index}>
                <div className="flex items-center justify-between my-2">
                  <span className="text-gray-500">{detail.title}</span>
                  <span className="font-bold text-gray-800">
                    {detail.amount}
                  </span>
                  <div className="flex items-center">
                    <detail.IconComponent
                      className={`w-4 h-4 mr-1 ${getChangeColor(
                        detail.changePercentage
                      )}`}
                    />
                    <span
                      className={`font-medium ${getChangeColor(
                        detail.changePercentage
                      )}`}
                    >
                      {formatPercentage(detail.changePercentage)}
                    </span>
                  </div>
                </div>
                {index < details.length - 1 && <hr />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
