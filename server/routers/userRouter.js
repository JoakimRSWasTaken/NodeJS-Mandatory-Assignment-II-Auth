import { Router } from 'express';
import { isLoggedIn } from '../utils/authMiddleware.js';

const router = Router();

router.get('/api/user', isLoggedIn, (req, res) => {
    res.send({ data: 'You are a regular user!' });
})

export default router;