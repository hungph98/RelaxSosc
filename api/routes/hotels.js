import express from "express";
import {
    countByCity,
    countByType,
    createHotel,
    deleteHotel,
    getAllHotel,
    getHotelById,
    updateHotel
} from "../controller/hotel.js";
import {verifyAdmin} from "../utils/verifyToken.js";

const router = express.Router();

/**
 * GetAll
 */
router.get("/", getAllHotel);

/**
 * GetById
 */
router.get("/find/:id", getHotelById);

/**
 * Create
 */
router.post("/",verifyAdmin, createHotel);

/**
 * Update
 */
router.put("/:id",verifyAdmin, updateHotel);

/**
 * Delete
 */
router.delete('/:id',verifyAdmin, deleteHotel);

/**
 * Count By City
 */
router.get("/count-by-city", countByCity);

/**
 * Count By Type
 */
router.get("/count-by-type", countByType)



export default router