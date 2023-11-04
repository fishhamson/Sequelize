import Like from "../models/like.js";

const getListLike= async (req, res)=>{
    let data = await Like.findAll()
    res.send(data)
}

export{getListLike};