import express from "express"
const router = express.Router()

import { getUsers, getUser } from "../controller/users.controller"

router.get("/", getUsers)
router.get("/:id", getUser)

export default router