const orderModel = require(`../../model/order`)

module.exports = async(req,res)=>{
try {
    const id = req.query.id
    await orderModel.findOneAndDelete({_id:id})
    res.status(200).json({message:"one order deleted"})
} catch (error) {
    res.status(500).json({message:"catch error in delete order"})
}
}