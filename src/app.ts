import express from "express"
const app = express()

import { mainRoutes, usersRoutes, productsRoutes } from "./routes"
app.use("/", mainRoutes)
app.use("/api/users", usersRoutes)
app.use("/api/products", productsRoutes)


export default app