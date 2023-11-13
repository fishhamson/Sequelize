import sequelize from '../models/connect.js'
import initModels from '../models/init-models.js'


const model = initModels(sequelize)

const getListLike= async (req, res)=>{
    let { user_id, res_id, date_like } = req.body;
    let data = await model.like_res.create({
        user_id: user_id,
        res_id: res_id,
        date_like: date_like
    })
    res.send(data)
}

const getListUnlike= async (req, res)=>{
    let { user_id, res_id, date_like } = req.body;
    let data = await model.like_res.destroy({
        user_id: user_id,
        res_id: res_id,
        date_like: date_like
    })
    res.send(data)
}

const getListWithIdRes= async (req, res)=>{
    let {resId} = req.params
    let data = await model.like_res.findAll({
        where:{
            res_id: resId
        }
    })
    res.send(data)
}

const getListWithIdUser= async (req, res)=>{
    let {userId} = req.params
    let data = await model.like_res.findAll({
        where:{
            user_id: userId
        }
    })
    res.send(data)
}

export{getListLike, getListUnlike, getListWithIdRes, getListWithIdUser};