import { Router } from "express";
import {
    getAllCities,
    assignUserToCity,
    setThiefRandomly,
    reSetRestAll
} from "../controllers/city.controller.js";

const router = Router();

// Get all cities
router.get("/", getAllCities);



// Assign a user to a city
router.post("/assign", assignUserToCity);


// Set thief randomly in a city
router.post("/thief", setThiefRandomly);

router.post("/rest-all",reSetRestAll);

export default router;
