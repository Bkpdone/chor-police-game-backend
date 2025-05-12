import appState from '../db/appState.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const getAllCities = asyncHandler((req, res) => {
    const cities = appState.cityStore.getAllCities();
    return res.status(200).json(new ApiResponse(200, cities));
});

export const assignUserToCity = asyncHandler((req, res) => {
    const { cityId, userId } = req.body;
    const success = appState.cityStore.assignUserToCity(cityId, userId);
    if (!success) {
        return res.status(400).json(new ApiResponse(400, null, "Failed to assign user to city"));
    }
    return res.status(200).json(new ApiResponse(200, { cityId, userId }, "User assigned to city"));
});


export const setThiefRandomly = asyncHandler((req, res) => {
    appState.cityStore.setThief();
    return res.status(200).json(new ApiResponse(200, null, "Thief set randomly in a city"));
});

export const reSetRestAll= asyncHandler((req,res)=>{  
      appState.reset();
     return res.status(200).json(new ApiResponse(200, null, "rest all"));
})