import appState from '../db/appState.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const getAllVehicles = asyncHandler((req, res) => {
    const vehicles = appState.vehicleStore.getAllVehicles();
    return res.status(200).json(new ApiResponse(200, vehicles));
});


export const assignUserToVehicle = asyncHandler((req, res) => {
    const { bikeId, userId } = req.body;
    const success = appState.vehicleStore.assignUserToVehicle(bikeId, userId);
    if (!success) {
        return res.status(400).json(new ApiResponse(400, null, "Failed to assign user to vehicle"));
    }
    return res.status(200).json(new ApiResponse(200, { bikeId, userId }, "User assigned to vehicle"));
});

