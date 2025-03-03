import { Router } from 'express';
import * as userController from '../controllers/user.controller';
import { authMiddleware } from '../middleware/auth.middleware';
import { isResourceOwner } from '../middleware/isResourceOwner.middleware';

const router = Router();

router.use(authMiddleware);

router.get('/:id', isResourceOwner, userController.getUserById);
router.put('/:id', isResourceOwner, userController.updateUser);
router.delete('/:id', isResourceOwner, userController.deleteUser);

export default router;