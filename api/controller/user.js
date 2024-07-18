import User from "../models/User.js";

/**
 * GetAll
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
export const getAllUser = async (req, res, next) => {
    try {
        const getAllUser = await User.find();
        res.status(200).json(getAllUser);
    } catch (err) {
        next(err);
    }
};

/**
 * GetById
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
export const getUserById = async (req, res, next) => {
    try {
        const getByIdUser = await User.findById(req.params.id);
        res.status(200).json(getByIdUser);
    } catch (err) {
        next(err)
    }
}

/**
 * Update User
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
export const updateUser = async (req, res, next) => {
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updateUser);
    } catch (err) {
        next(err);
    }
};

/**
 * Delete User
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
export const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('User has been deleted!');
    } catch (err) {
        next(err);
    }
};