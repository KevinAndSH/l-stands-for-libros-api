import express from "express"
const router = express.Router()

import { getProduct, getProducts } from "../controller/products.controller"

router.get("/", getProducts)
router.get("/:id", getProduct)


export default router