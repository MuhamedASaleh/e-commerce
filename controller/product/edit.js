const productModel = require(`../../model/product`);

module.exports = async(req,res)=>{
    try { 
        const title = req.body.title
        const id = req.query.id
        await productModel.findByIdAndUpdate(id,{title})
            res.status(200).json({message:"one product updated"})
    
    } catch (error) {
        res.status(500).json({message:"catch error in edit product"})
    }
}