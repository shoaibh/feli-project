import mongoose, { Schema, Document } from "mongoose";

interface ICampaign extends Document {
  user: mongoose.Types.ObjectId;
  name: string;
  saved: number;
  calls: number;
  messaged: number;
  contactRate: number;
  replied: number;
  repliedRate: number;
  booked: number;
  bookedRate: number;
  sales: number;
  salesRate: number;
  createdAt: Date;
}

const CampaignSchema = new Schema<ICampaign>(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    saved: { type: Number, required: true },
    calls: { type: Number, required: true },
    messaged: { type: Number, required: true },
    contactRate: { type: Number, required: true },
    replied: { type: Number, required: true },
    repliedRate: { type: Number, required: true },
    booked: { type: Number, required: true },
    bookedRate: { type: Number, required: true },
    sales: { type: Number, required: true },
    salesRate: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Campaign = mongoose.model<ICampaign>("Campaign", CampaignSchema);
export default Campaign;
