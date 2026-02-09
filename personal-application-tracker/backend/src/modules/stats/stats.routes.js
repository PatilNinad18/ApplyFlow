import { Router } from "express";
import { getMyStatsController } from "./stats.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";

const router = Router();

router.get("/", authMiddleware, getMyStatsController);
export default router;