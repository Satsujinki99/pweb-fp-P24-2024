import { Router } from "express";
import AuthController from "../controllers/authController";

const router: Router = Router();

router.post("/login", AuthController.login);
router.post("/register", AuthController.register); // Tambahkan endpoint register

export default router;
