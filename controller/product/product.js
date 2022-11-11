
const productModel = require(`../../model/product`)

module.exports = async(req,res)=>{
try {
    const id = req.query.id
    const product = await productModel.findById(id)
    const {_id,...other}= product._doc
    res.status(200).json({message:"here single product",...other})
} catch (error) {
    res.status(500).json({message:"catch error in get single product"})
}
}
