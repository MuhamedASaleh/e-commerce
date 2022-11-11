const productModel = require(`../../model/product`)

module.exports = async(req,res)=>{
try {
    const products = await productModel.find()
    res.status(200).json({'allProduct':products}) 
} catch (error) {
    res.status(500).json({message:`catch error in get all product`})
}
}