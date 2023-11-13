import express from 'express';
import { getListLike, getListUnlike, getListWithIdRes, getListWithIdUser } from '../controllers/likeController.js';


const likeRoutes = express.Router();

likeRoutes.get("/like", getListLike);
likeRoutes.get("/like", getListUnlike);
likeRoutes.get("/like/res/:resId", getListWithIdRes);
likeRoutes.get("/like/user/:userId", getListWithIdUser);

export {likeRoutes};