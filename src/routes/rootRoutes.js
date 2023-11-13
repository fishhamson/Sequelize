
import { likeRoutes } from './likeRoutes.js';
import express from 'express';
import { rateRoutes } from './rateRoutes.js';
import { orderRoutes } from './oderRoutes.js';

const rootRoutes = express.Router()
rootRoutes.use("/restaurant", likeRoutes)
rootRoutes.use("/restaurant", rateRoutes)
rootRoutes.use("/restaurant", orderRoutes)

export default rootRoutes