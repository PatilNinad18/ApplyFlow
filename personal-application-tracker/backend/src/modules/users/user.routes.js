import {Router} from "express";
import { getMyProfileController, updateMyProfileController } from "./user.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";

const router = Router();

// GET /api/users/me
router.get("/me", authMiddleware, getMyProfileController);

// POST /api/users/me

router.patch("/me", authMiddleware, updateMyProfileController)

export default router;
