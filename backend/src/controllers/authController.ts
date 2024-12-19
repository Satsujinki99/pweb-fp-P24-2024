import AuthService from "../services/authService";
import type { Request, Response } from "express";

class AuthController {
  async login(req: Request, res: Response) {
    try {
      const { username, password } = req.body;

      if (!username || !password) {
        throw new Error("Username or password is missing");
      }

      const { user, token } = await AuthService.login({ username, password });

      res.status(200).json({
        status: "success",
        message: "Login successful",
        data: { user, token },
      });
    } catch (error) {
      res.status(400).json({
        status: "failed",
        message: error.message,
      });
    }
  }

  async register(req: Request, res: Response) {
    try {
      const { username, password, role } = req.body;

      if (!username || !password) {
        throw new Error("Username or password is missing");
      }

      const validRoles = ["USER", "ADMIN"];
      if (role && !validRoles.includes(role)) {
        throw new Error("Invalid role");
      }

      const newUser = await AuthService.register({ username, password, role });

      res.status(201).json({
        status: "success",
        message: "User registered successfully",
        data: { user: newUser },
      });
    } catch (error) {
      res.status(400).json({
        status: "failed",
        message: error.message,
      });
    }
  }
}

export default new AuthController();
