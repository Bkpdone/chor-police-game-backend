import express from 'express';
import cookieParser from 'cookie-parser';
import cors from "cors";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
})
)
app.use(express.json({
    limit: "32kb"
}));
app.use(express.urlencoded({
    extended: true,
    limit: "32kb"
}));

app.use(express.static("public"))
app.use(cookieParser());

import userRouter from "../src/routes/user.route.js";
import vehicleRouter from "../src/routes/vehicle.route.js";
import citiesRouter from "../src/routes/city.route.js";

app.use("/api/v1/users",userRouter);
app.use("/api/v1/vehicles",vehicleRouter);
app.use("/api/v1/cities",citiesRouter);

export { app } 