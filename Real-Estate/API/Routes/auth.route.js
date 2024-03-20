import express from 'express';
import {signup} from '../Controllers/auth.controller.js';

const router = express.router();

router.post("/signup",signup);

export default router;