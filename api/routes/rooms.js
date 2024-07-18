import express from "express";
import {createNewRoom, deleteRoom, getAllRoom, getRoomById, updateRoom} from "../controller/room.js";
import {verifyAdmin} from "../utils/verifyToken.js";

const router = express.Router();

/**
 * GetAll
 */
router.get("/", getAllRoom);

/**
 * GetById
 */
router.get("/:id", getRoomById);

/**
 * Create
 */
router.post("/:hotelid",verifyAdmin, createNewRoom);

/**
 * Update
 */
router.put("/:id",verifyAdmin, updateRoom);

/**
 * Delete
 */
router.delete('/:id/:hotelid',verifyAdmin, deleteRoom);

export default router