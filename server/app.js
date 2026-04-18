import express from 'express';
import 'dotenv/config';

const app = express();

import cors from 'cors';
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

import session from 'express-session';
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));

import authRouter from "./routers/authRouter.js";
app.use(authRouter);

const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => {
    console.log('Server is listening on', PORT);
});