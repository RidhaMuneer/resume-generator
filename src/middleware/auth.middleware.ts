import { NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AuthRequest } from "../types/auth";

// Fix the authMiddleware to extract just the id from the decoded token
export const authMiddleware = (req: AuthRequest, res: any, next: NextFunction) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET!) as jwt.JwtPayload;
    req.id = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token is not valid" });
  }
};