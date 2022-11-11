
const jwt = require(`jsonwebtoken`)

module.exports = async(req,res,next)=>{
    try {
        const authToken = req.header('token')
        const token = authToken.split(' ')[1]
        if (token) {
            jwt.verify(token,`shhhh`,(err,decoded)=>{
                if (err) {
                    res.status(500).json({message:"invalid token"})
                } else {
                    req.name = decoded.name
                    req.id = decoded.id
                    req.role= decoded.role
                  
                    next()
                }
            })
        } else {
        res.status(500).json({message:"token does not exist"})
        }
    } catch (error) {
        res.status(500).json({message:"catch error in authentication"})
    }
}
