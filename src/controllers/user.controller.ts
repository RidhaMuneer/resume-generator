import { Request, Response, NextFunction } from 'express';
import * as userService from '../services/user.service';
import { generateAccessToken } from '../utils/auth';

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await userService.findUserById(req.params.id);

    if (!user) {
      res.status(404).json({
        status: 'fail',
        message: 'User not found',
      });
    }
    
    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json({
      status: "success",
      data: {
        user,
        access_token: generateAccessToken(user.id),
      },
    });
  } catch (error) {
    next(error); 
  }
};


export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    
    if (!user) {
      res.status(404).json({
        status: 'fail',
        message: 'User not found',
      });
    }
    
    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await userService.deleteUser(req.params.id);
    
    if (!user) {
      res.status(404).json({
        status: 'fail',
        message: 'User not found',
      });
    }
    
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};