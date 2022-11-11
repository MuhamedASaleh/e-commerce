const orderModel = require(`../../model/order`)

module.exports = async(req,res)=>{
try {
   
   const orders = await orderModel.find()
    res.status(200).json({'allOrders':orders})  
    
    
} catch (error) {
    res.status(500).json({message:`catch error in get all orders`})
}
}