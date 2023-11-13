import express from 'express'
import { addOder } from '../controllers/oderController.js'

const orderRoutes = express.Router()
orderRoutes.use("/order", addOder)

export { orderRoutes }