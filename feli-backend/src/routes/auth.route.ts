import express from "express";

import { doLogin, doLogout, doSignUp } from "../jobs/auth.job";

const router = express.Router();

router.post("/login", doLogin);
router.post("/signup", doSignUp);
router.post("/logout", doLogout);

export default router;
