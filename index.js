import express from "express";
import rootRoutes from "./src/routes/rootRoutes.js";


const app = express();

app.use(express.json())
app.use(rootRoutes)
app.listen(8080)




//npx sequelize-auto -h localhost -d food_data -u root -x 1234 -p 3307 --dialect mysql -o src/models -l esm