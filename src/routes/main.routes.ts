import express from "express"
const router = express.Router()

import { greet } from "../controller/main.controller"

router.get("/", greet)


export default router