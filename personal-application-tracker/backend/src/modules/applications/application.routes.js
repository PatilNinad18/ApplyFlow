import { Router } from "express";
import { createApplicationController,getMyApplicationController,updateApplicationController,deleteApplicationController } from "./application.controller.js";
import {authMiddleware} from "../../middlewares/auth.middleware.js";
import { get } from "mongoose";

const router = Router();

// POST /api/applications
router.post("/", authMiddleware, createApplicationController);

// GET /api/applications
router.get("/", authMiddleware, getMyApplicationController);

// PATCH /api/applications/:id
router.patch("/:id", authMiddleware, updateApplicationController);

// DELETE /api/applications/:id
router.delete("/:id", authMiddleware, deleteApplicationController);

export default router;