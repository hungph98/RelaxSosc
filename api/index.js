import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRouter from "./routes/auth.js"
import hotelRouter from "./routes/hotels.js";
import roomRouter from "./routes/rooms.js";
import userRouter from "./routes/users.js";
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express();
dotenv.config();

const connect = async () => {
        try {
                await mongoose.connect(process.env.MONGODB);
        } catch (error) {
                throw error;
        }
};

app.use(cors());
app.use(cookieParser())
app.use(express.json());

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/hotel', hotelRouter);
app.use('/api/v1/room', roomRouter);
app.use('/api/v1/user', userRouter);

app.use((err, req, res, next) => {
        const errorStatus = err.status || 500;
        const errorMessage = err.message || 'Some thing went wrong';

        return res.status(errorStatus).json({
                success: false,
                status: errorStatus,
                message: errorMessage,
                stack: err.stack
        });
});

app.listen(8080, () => {
        connect();
});