import express from "express";

const router = express.Router()
import {list} from "../controllers/project.js";

router.get('/projects',  list)

export default router