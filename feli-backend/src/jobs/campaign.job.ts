import { Response } from "express";

import Campaign from "../models/campaign.model";
import { AuthenticatedRequest } from "../types/requestType";

export const getCampaigns = async (
  req: AuthenticatedRequest,
  res: Response,
) => {
  try {
    const campaigns = await Campaign.find({ user: req.user.id });
    res.json(campaigns);
  } catch (error) {
    res.status(500).json({ message: "Error fetching campaigns", error });
  }
};
