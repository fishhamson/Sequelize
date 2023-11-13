import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";



const model = initModels(sequelize)

const addOder = async (req, res) => {
    let { user_id, food_id, amount, code, arr_sub_id } = req.body;
    let data = await model.order_food.create({
        user_id: user_id,
        food_id: food_id,
        amount: amount,
        code: code,
        arr_sub_id: arr_sub_id
    })
    res.send(data)
}

export { addOder }