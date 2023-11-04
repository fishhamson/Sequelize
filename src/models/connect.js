import { Sequelize } from "sequelize";

const sequelize = new Sequelize("food_data", "root", "1234", {
    port: 3307,
    dialect: "mysql",
    host: "localhost"
})

export default sequelize

// check connect sql

// try {
//     sequelize.authenticate();
//     console.log("connect success")
// } catch (error) {
//     console.log(`connect fail: ${error}`)
// }