import { Campaign } from "./campaign";
import { CampaignDataType } from "../types/Campaign";
import { callApiFromServer } from "../utils/callApiFromServer";
import { CustomButton } from "../components/custom-button";

const fetchCampaigns = async (): Promise<CampaignDataType[]> => {
  const response = await callApiFromServer("/campaigns", "GET");
  return response;
};

const DashboardPage = async () => {
  const campaigns = await fetchCampaigns();

  return (
    <div className="overflow-scroll max-h-[calc(100vh-4rem)]">
      <section className="p-4 flex justify-between items-center border-b border-solid border-b-[#55476A]">
        <div>
          <h2 className="text-[#4AFF8A] text-[32px] font-semibold">
            DASHBOARD
          </h2>
          <p className="text-[#87968C] text-[18px] font-medium">
            Watch the performance of your omni-channel campaigns
          </p>
        </div>
        <div>
          <CustomButton
            className="bg-[#FF0016] cursor-pointer py-5 px-7 m-auto rounded-sm text-white text-2xl font-semibold"
            label="Start New Campaign"
            type="button"
          />
        </div>
      </section>
      <div className="flex gap-5 flex-wrap py-7 px-5 overflow-scroll">
        {campaigns?.map((campaign) => (
          <Campaign key={campaign._id} campaign={campaign} />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
