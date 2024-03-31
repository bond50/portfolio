import express from "express";
const router = express.Router()

import {list} from "../controllers/skill.js";

router.get('/skills',  list)

export default router
