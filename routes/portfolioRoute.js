import { Router } from "express";
import { sendEmailController } from "../controllers/portfolioController.js";

const router = Router();

router.post("/sendEmail", sendEmailController);

export default router;