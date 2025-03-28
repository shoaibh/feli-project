import mongoose from "mongoose";

import Campaign from "../models/campaign.model";

export const createDummyCampaign = async (userId: mongoose.Types.ObjectId) => {
  const campaign = new Campaign({
    user: userId,
    name: `Campaign_${Math.random().toString(36).substring(7)}`,
    description: "This is a dummy campaign description.",
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: Math.random() > 0.5,
    saved: Math.floor(Math.random() * 50000),
    calls: Math.floor(Math.random() * 100),
    messaged: Math.floor(Math.random() * 5000),
    contactRate: Math.random() * 100,
    replied: Math.floor(Math.random() * 1000),
    repliedRate: Math.random() * 100,
    booked: Math.floor(Math.random() * 100),
    bookedRate: Math.random() * 100,
    sales: Math.floor(Math.random() * 50),
    salesRate: Math.random() * 100,
  });

  await campaign.save();
  return campaign;
};

export const createMultipleDummyCampaigns = async (
  userId: mongoose.Types.ObjectId,
  count: number,
) => {
  const campaigns = [];
  for (let i = 0; i < count; i++) {
    const campaign = await createDummyCampaign(userId);
    campaigns.push(campaign);
  }
  return campaigns;
};
