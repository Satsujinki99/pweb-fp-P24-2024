import type { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";

interface CustomRequest extends Request {
  user?: string | jwt.JwtPayload;
}

export const authMiddleware = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      throw new Error("No token provided");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!);

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      status: "failed",
      message: error.message,
    });
  }
};
