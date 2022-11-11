
const userModel = require(`../../model/user`)
module.exports = async(req,res)=>{

try {   
   await userModel.findOneAndUpdate(req.query.id,{username:req.body.username})
        res.status(200).json({message:'done'})
   
} catch (error) {
    res.status(500).json({message:"catch error in update user"})
}
} 