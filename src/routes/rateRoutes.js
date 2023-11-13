import express from 'express'
import { addRate, getListRateWithIdRes, getListRateWithIdUser } from '../controllers/rateController.js';

const rateRoutes = express.Router();

rateRoutes.get("/rate", addRate)
rateRoutes.get("/rate/res/:resId", getListRateWithIdRes)
rateRoutes.get("/rate/res/:userId", getListRateWithIdUser)

export { rateRoutes }