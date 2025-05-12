// AppState.js
import UserStore from "../models/user.model.js";
import CityStore from "../models/city.model.js";
import VehicleStore from "../models/vehicle.model.js";

export class AppState {
    constructor() {
        this.init();
    }

    init() {
        this.userStore = new UserStore([
            { id: 1, name: "Adon", avatar: "" },
            { id: 2, name: "Bdon", avatar: "" },
            { id: 3, name: "Cdon", avatar: "" }
        ]);

        this.cityStore = new CityStore([
            { id: 1, name: "Yapkashnagar", cityPhoto: "", assignedUserId: null, distance: 60, thiefPresent: false, visited: false },
            { id: 2, name: "Lihaspur", cityPhoto: "", assignedUserId: null, distance: 50, thiefPresent: false, visited: false },
            { id: 3, name: "Narmis City", cityPhoto: "", assignedUserId: null, distance: 40, thiefPresent: false, visited: false },
            { id: 4, name: "Shekharvati", cityPhoto: "", assignedUserId: null, distance: 30, thiefPresent: false, visited: false },
            { id: 5, name: "Nuravgram", cityPhoto: "", assignedUserId: null, distance: 20, thiefPresent: false, visited: false }
        ]);

        this.vehicleStore = new VehicleStore([
            { id: 1, name: "EV Bike", assignUserId: null, count: 2, bikePhoto: "", range: 60 },
            { id: 2, name: "EV Car", assignUserId: null, count: 1, bikePhoto: "", range: 100 },
            { id: 3, name: "EV SUV", assignUserId: null, count: 1, bikePhoto: "", range: 120 }
        ]);
    }

    reset() {
        this.init(); // Reset to initial state
    }

    debugState() {
        console.log("Users:", this.userStore.getAllUsers());
        console.log("Cities:", this.cityStore.getAllCities());
        console.log("Vehicles:", this.vehicleStore.getAllVehicles());
    }
}

const appState = new AppState();
export default appState;
