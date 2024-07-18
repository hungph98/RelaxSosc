import User from "../models/User.js";
import bcrypt from "bcrypt";
import {createError} from "../utils/error.js";
import jwt from "jsonwebtoken";

/**
 * Register
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
export const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(20);
        const hash = bcrypt.hashSync(req.body.password, salt)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash
        });

        await newUser.save();
        res.status(200).json('Sign-up success');
    } catch (err) {
        next(err)
    }
}

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({
            username: req.body.username
        });

        if (!user) {
            return next(createError(404), 'User not Found');
        }

        const isPassword = await bcrypt.compare(req.body.password, user.password);

        if (!isPassword) {
            return next(createError(400), 'Wrong password or username');
        }

        const token = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        }, process.env.JWT)

        const { password, isAdmin, ...otherDetails} = user._doc;
        res.cookie(
            "access_token", token, {
                httpOnly: true
            }).status(200).json({detail: {...otherDetails, token}, isAdmin});
    } catch (err) {
        next(err);
    }
}