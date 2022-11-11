
const orderModel = require(`../../model/order`)

module.exports = async(req,res)=>{
try {
    const id = req.query.id
    const order = await orderModel.findById(id)
    const {_id,...other}= order._doc
    res.status(200).json({message:"here single order",...other})
} catch (error) {
    res.status(500).json({message:"catch error in get single order"})
}
}
