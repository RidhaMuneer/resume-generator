import { NextFunction, Response } from "express";
import { AuthRequest } from "../types/auth.type";

export const isResourceOwner = (req: AuthRequest, res: Response, next: NextFunction): void => {
  const paramUserId = req.params.id;

  if (!paramUserId) {
    res.status(400).json({ 
      message: "Bad request: resource ID not provided in URL" 
    });
    return;
  }

  if (String(req.id) !== String(paramUserId)) {
    res.status(403).json({ 
      message: "Unauthorized: You don't have permission to access this resource" 
    });
    return;
  }

  next();
};