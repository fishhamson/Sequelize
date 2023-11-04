import express from "express";
import mysql from "mysql2"
import { routes } from "./src/routes/resRoutes.js";

const app = express();

app.use(express.json())
app.use(routes)
app.listen(8080)




//npx sequelize-auto -h localhost -d food_data -u root -x 1234 -p 3307 --dialect mysql -o src/models -l esm