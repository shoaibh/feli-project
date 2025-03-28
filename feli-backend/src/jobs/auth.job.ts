import bcrypt from "bcrypt";
import { serialize } from "cookie";
import { Request, Response } from "express";
import mongoose from "mongoose";

import UserModel from "../models/user.model";
import { createMultipleDummyCampaigns } from "../utils/createDummyCampaign";
import { createJWTToken } from "../utils/createJWTToken";

export const doLogin = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  if (!email || !password) {
    res
      .status(400)
      .json({ success: false, message: "Email and password are required" });
    return;
  }

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(401).json({ success: false, message: "Invalid credentials" });
      return;
    }

    const token = createJWTToken(user);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 3600 * 1000,
      path: "/",
    });

    res.json({
      success: true,
      message: "Login successful",
      data: { user },
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to login",
      error: error.message,
    });
  }
};

export const doSignUp = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  if (!email || !password) {
    res
      .status(400)
      .json({ success: false, message: "Email and password are required" });
    return;
  }

  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      res.status(409).json({ success: false, message: "User already exists" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({ email, password: hashedPassword });
    await newUser.save();

    const userId = new mongoose.Types.ObjectId(newUser._id as string);

    createMultipleDummyCampaigns(userId, Math.random() * 10);

    const token = createJWTToken(newUser);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 3600 * 1000,
      path: "/",
    });

    res.status(201).json({
      success: true,
      message: "Signup successful",
      data: { token, user: newUser },
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to signup",
      error: error.message,
    });
  }
};

export const doLogout = (req: Request, res: Response) => {
  res.setHeader(
    "Set-Cookie",
    serialize("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: -1,
      path: "/",
    }),
  );

  res.json({ success: true, message: "Logged out successfully" });
};
