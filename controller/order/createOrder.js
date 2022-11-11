const orderModel = require(`../../model/order`);

module.exports = async (req, res) => {
  try {
    const id = req.body.id;
    const one = await orderModel.insertMany({
      userId: id,
      products: [
        { productId: req.body.productId },
        { quantity: req.body.quantity },
      ],
      amount:req.body.amount,
    address:req.body.address,
    status:req.body.status
    });
    res.status(200).json({message:"one order added",one})
  } catch (error) {
    res.status(500).json({ message: "catch error in create order" });
  }
};
