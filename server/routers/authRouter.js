import { Router } from 'express';

const router = Router();


router.post('/auth/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).send({ errorMessage: "Please provide both email and password."})
    }
});

router.post('/auth/logout', (req, res) => {
    
});

router.post('/auth/signup', (req, res) => {

});


export default router;