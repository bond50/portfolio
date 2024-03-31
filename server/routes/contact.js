import express from "express";
const router = express.Router()


import {sendMail} from "../controllers/contact.js";

router.post('/contact',  sendMail)
export default router;