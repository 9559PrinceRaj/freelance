const userModel = require("../models/userModel");

    const loginUser = async (req, res) => {
        try {
            const { email, password } = req.body;


            await newUser.save()
            res.json({ msg: "login Successfully" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }

module.exports = loginUser;