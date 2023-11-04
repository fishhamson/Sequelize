import express from 'express';
import { getListLike } from '../controllers/likeController.js';


const routes = express.Router();

routes.get("/restaurant/like", getListLike);

export {routes};