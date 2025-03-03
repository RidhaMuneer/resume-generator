import { NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AuthRequest } from "../types/auth";

export const authMiddleware =  (req: AuthRequest, res: any, next: NextFunction) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET!);
    req.id = decoded;
    next(); 
  } catch (error) {
    return res.status(401).json({ message: "Token is not valid" });
  }
};