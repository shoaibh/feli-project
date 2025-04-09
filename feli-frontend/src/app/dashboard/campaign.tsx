import React from "react";
import { CampaignDataType } from "../types/Campaign";
import { Circle } from "../components/circle";

export const Campaign = ({ campaign }: { campaign: CampaignDataType }) => {
  const stats = [
    { label: "MESSAGED", value: campaign.messaged },
    { label: "CONTACT RATE", value: `${campaign.contactRate.toFixed(0)}%` },
    { label: "REPLIED", value: campaign.replied },
    { label: "REPLIED", value: `${campaign.repliedRate.toFixed(0)}%` },
    { label: "BOOKED", value: campaign.booked },
    { label: "BOOKED", value: `${campaign.bookedRate.toFixed(0)}%` },
    { label: "SALES", value: campaign.sales },
    { label: "SALES", value: `${campaign.salesRate.toFixed(0)}%` },
  ];

  return (
    <div className="min-w-[450px] rounded-sm border border-[#55476A] px-5 py-3 pb-14">
      <div className="flex gap-3">
        <Circle size="32" color="#60F7A9" />
        <h4 className="text-2xl text-[#DDD7E6] font-semibold">
          {campaign.name}
        </h4>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4 rounded-sm bg-[#1F1B25] p-2 pb-8">
        {[
          { label: "SAVED", value: `$${campaign.saved}` },
          { label: "CALLS", value: campaign.calls },
        ].map(({ label, value }, index) => (
          <div key={label} className={`${index === 1 ? "ml-4" : ""}`}>
            <p className="text-5xl font-semibold text-[#4AFF8A]">{value}</p>
            <p className="text-lg text-[#61A579]">{label}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-px rounded-sm bg-[#1F1B25] pb-32">
        {stats.map(({ label, value }, index) => (
          <div
            key={label + index}
            className={`flex flex-col items-start justify-start p-3 border-b border-[#55476A] ${
              index % 2 === 0
                ? "relative after:absolute after:top-0 after:right-0 after:w-[0.5px] after:h-[110%] after:bg-[#55476A]"
                : ""
            }`}
          >
            <p className="text-5xl font-semibold text-white">{value}</p>
            <p className="text-lg font-medium text-[#87968C]">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
