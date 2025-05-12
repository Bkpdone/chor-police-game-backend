import appState from '../db/appState.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const getAllUsers = asyncHandler((req, res) => {
    const users = appState.userStore.getAllUsers();
    return res.status(200).json(new ApiResponse(200, users));
});


export { getAllUsers };
