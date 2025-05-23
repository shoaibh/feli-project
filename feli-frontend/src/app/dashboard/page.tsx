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
      <section className="px-4 py-3 flex justify-between items-center border-b border-solid border-b-[#55476A]">
        <div>
          <h2 className="text-[#4AFF8A] text-[32px] leading-9 font-semibold">
            DASHBOARD
          </h2>
          <p className="text-[#87968C] text-[18px] leading-6 font-medium">
            Watch the performance of your omni-channel campaigns
          </p>
        </div>
        <div>
          <CustomButton
            appearance="primary"
            className="w-full px-12 m-auto text-white "
            label="Start New Campaign"
            type="button"
          />
        </div>
      </section>
      <div className="flex gap-5 flex-wrap py-9 px-5 overflow-scroll">
        {campaigns?.map((campaign) => (
          <Campaign key={campaign._id} campaign={campaign} />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
