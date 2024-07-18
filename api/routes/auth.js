import express from "express";
import {register, login} from "../controller/auth.js";

const router = express.Router();

/**
 * Sign-in
 */
router.post("/login", login)

/**
 * Sign-up
 */
router.post( "/register", register);

export default router
