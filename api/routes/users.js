import express from "express";
import {deleteUser, getAllUser, getUserById, updateUser} from "../controller/user.js";
import {verifyAdmin, verifyToken, verifyUser} from "../utils/verifyToken.js";

const router = express.Router();

// /**
//  * CheckAuth
//  */
// router.get('/check-auth', verifyToken, (req, res, next) => {
//     res.send('hello user, you logged')
// })
//
// /**
//  * CheckUser
//  */
// router.get('/check-user/:id', verifyUser, (req, res, next) => {
//     res.send('hello user, you logged and can delete user')
// })
//
// /**
//  * CheckUser
//  */
// router.get('/check-admin/:id', verifyAdmin, (req, res, next) => {
//     res.send('hello admin, you logged and can delete user')
// })

/**
 * GetAll
 */
router.get('/',verifyUser, getAllUser);

/**
 * GetById
 */
router.get('/:id',verifyUser, getUserById);

/**
 * Update
 */
router.put('/:id',verifyUser, updateUser);

/**
 * Delete
 */
router.delete('/:id',verifyAdmin, deleteUser);

export default router