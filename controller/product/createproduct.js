const productModel = require(`../../model/product`);

module.exports = async (req, res) => {
  try {
    const {title,desc,img,categories, size,color,price} = req.body
    await productModel.insertMany({
      title,
      desc,
      img,
      categories,
      size,
      color,
      price,
      userId:req.id
    });
    res.status(201).json({message:"one product added"})
  } catch (error) {
    res.status(500).json({ message: "catch error in create product" });
  }
};
