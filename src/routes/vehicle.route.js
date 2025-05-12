import { Router } from "express";
import {
    getAllVehicles,
    assignUserToVehicle,
} from "../controllers/vehicle.controller.js";

const router = Router();

// Get all vehicles
router.get("/", getAllVehicles);

// Get vehicle by ID


// Assign a user to a vehicle
router.post("/assign", assignUserToVehicle);



export default router;
