const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const signup = async (req, res, next) => {
    const { fullname, email, password, isAdmin, isSuperAdmin } = req.body;
    try {
        const exist = await User.findOne({ email })
        if (exist) {
            return res.status(400).json({ message: 'User email already exists' })
        }

        const checkname = await User.findOne({ fullname })
        if (checkname) {
            return res.status(400).json({ message: 'User name already exists' })
        }


        const hashPassword = await bcrypt.hash(password, 12);
        const user = await User.create({
            fullname,
            email,
            password: hashPassword,
            role: (isAdmin && 'admin') || isSuperAdmin && 'superAdmin',
        })
        res.status(201).json({ user })
    } catch (err) {
        console.log(err)
    }
}

const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email })
        if (!user) {
            res.status(400).json({ message: 'Invalide Credenntials' })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            res.status(400).json({ message: 'Invalide Credenntials' })
        }
        const accessToken = jwt.sign({ id: user._id, role: user.role, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
        const refreshToken = jwt.sign({ id: user._id, role: user.role, email: user.email }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "336h" });
        res.status(200).json({ accessToken, user, refreshToken })
    } catch (err) {
        console.log(err)
    }
};

const refreshToken = (req, res) => {
    try {
        const rf_token = req.cookies.refreshToken;
        if (!rf_token)
            return res.status(400).json({ message: "Please Login or Register" });

        jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
            if (err) return res.status(400).json({ message: "Please Login or Register" });
            const accesstoken = createAccessToken({ id: user._id });
            res.json({ accesstoken });
        });
    } catch (err) {
        return res.status(500).json({ message: err });
    }
};

const signout = async (req, res) => {
    try {
        res.clearCookie("refreshtoken", { path: "/user/refresh_token" });
        return res.json({ msg: "Logged out" });
    } catch (err) {
        return res.status(500).json({ message: err });
    }
};

module.exports = { signin, signup, signout, refreshToken }