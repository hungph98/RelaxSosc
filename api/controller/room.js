import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";

/**
 * GetAll
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
export const getAllRoom = async (req, res, next) => {
    try {
        const getAllRoom = await Room.find();
        res.status(200).json(getAllRoom);
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
export const getRoomById = async (req, res, next) => {
    try {
        const getByIdRoom = await Room.findById(req.params.id);
        res.status(200).json(getByIdRoom);
    } catch (err) {
        next(err)
    }
}


/**
 * Create New Room
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
export const createNewRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid
    const newRoom = new Room(req.body);

    try {
        const saveNewRoom = await newRoom.save();
        await Hotel.findByIdAndUpdate(hotelId, {
            $push: {
                rooms: saveNewRoom._id
            }
        });

        res.status(200).json(saveNewRoom);
    } catch (err) {
        next(err);
    }
};

/**
 * Update Room
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
export const updateRoom = async (req, res, next) => {
    try {
        const updateRoom = await Room.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updateRoom);
    } catch (err) {
        next(err);
    }
};

/**
 * Delete Room
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
export const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    try {
        await Room.findByIdAndDelete(req.params.id);
        await Hotel.findByIdAndUpdate(hotelId,{
            $pull: {
                rooms: req.params.id
            }
        })
        res.status(200).json('Room has been deleted!');
    } catch (err) {
        next(err);
    }
};