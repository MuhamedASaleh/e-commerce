const orderModel = require(`../../model/order`);

module.exports = async(req,res)=>{
    try { 
        const amount = req.body.amount
        const id = req.query.id
        await orderModel.findByIdAndUpdate(id,{amount})
            res.status(200).json({message:"one order updated"})
    
    } catch (error) {
        res.status(500).json({message:"catch error in edit order"})
    }
}