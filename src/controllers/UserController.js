const UserService = require('../services/UserService')

const createUser = async (req,res)=> {
    try {
        console.log(req.body)
        const res = await UserService.createUser()
        return res.status(200).json()
    } catch (error) {
        return resolve.status(404).json({
            message: error
        })
    }
}

module.exports = {
    createUser
}