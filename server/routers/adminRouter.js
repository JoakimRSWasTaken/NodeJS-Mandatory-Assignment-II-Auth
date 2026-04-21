import { Router } from 'express';
import { isAdmin, isLoggedIn } from '../utils/authMiddleware.js';

const router = Router();

router.get('api/admin', isLoggedIn, isAdmin, (req, res) => {
    res.send({ data: 'You are an admin!' });
});

export default router;