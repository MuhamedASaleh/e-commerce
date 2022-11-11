

module.exports = async(req,res,next)=>{
    try {
        if (req.role) {
            next()
        } else {
            res.status(500).json({message:"sorry only admin"})
        }
    } catch (error) {
        res.status(500).json({message:"catch error in authorization"})
    }
}

