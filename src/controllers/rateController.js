import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";


const model = initModels(sequelize)

const addRate = async (req, res) => {
    let { user_id, res_id, date_rate } = req.body;
    let data = await model.rate_res.create({
        user_id: user_id,
        res_id: res_id,
        date_rate: date_rate,
    })
    res.send(data)
}

const getListRateWithIdRes = async (req, res) => {
    let { resId } = req.params
    let data = await model.rate_res.findAll({
        where: {
            res_id: resId
        }
    })
    res.send(data)
}

const getListRateWithIdUser = async (req, res) => {
    let { userId } = req.params
    let data = await model.rate_res.findAll({
        where: {
            user_id: userId
        }
    })
    res.send(data)
}

export { addRate, getListRateWithIdRes, getListRateWithIdUser }