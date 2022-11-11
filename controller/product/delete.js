const productModel = require(`../../model/product`)

module.exports = async(req,res)=>{
try {
    const id = req.query.id
    await productModel.findOneAndDelete({_id:id})
    res.status(200).json({message:"one product deleted"})
} catch (error) {
    res.status(500).json({message:"catch error in delete product"})
}
}