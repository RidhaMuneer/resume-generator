import { Router } from 'express';
import * as userController from '../controllers/user.controller';

const router = Router();

router.post('/register', userController.createUser);

export default router;