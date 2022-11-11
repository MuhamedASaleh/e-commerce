const userModel = require(`../../model/user`)

module.exports = async(req,res)=>{
try {
    const id = req.params.id
    await userModel.findOneAndDelete( id)
    res.status(200).json({message:'one user deleted'})
} catch (error) {
    res.status(500).json({message:"catch error in delete user"})
}
}
