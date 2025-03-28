import express from "express";

import { getCampaigns } from "../jobs/campaign.job";
import { authenticateToken } from "../middleware/auth.middleware";

const router = express.Router();

router.use(authenticateToken);

router.get("/campaigns", getCampaigns);

export default router;
