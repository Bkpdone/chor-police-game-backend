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
            { id: 1, name: "Adon", avatar: "/police/1.png" },
            { id: 2, name: "Bdon", avatar: "/police/2.png" },
            { id: 3, name: "Cdon", avatar: "/police/3.png" }
        ]);

        this.cityStore = new CityStore([
            { id: 1, name: "Yapkashnagar", cityPhoto: "/cities/Yapkashnagar.png", assignedUserId: null, distance: 60, thiefPresent: false, visited: false },
            { id: 2, name: "Lihaspur", cityPhoto: "/cities/Lihaspur.png", assignedUserId: null, distance: 50, thiefPresent: false, visited: false },
            { id: 3, name: "Narmis City", cityPhoto: "/cities/Narmis City.png", assignedUserId: null, distance: 40, thiefPresent: false, visited: false },
            { id: 4, name: "Shekharvati", cityPhoto: "/cities/Shekharvati.png", assignedUserId: null, distance: 30, thiefPresent: false, visited: false },
            { id: 5, name: "Nuravgram", cityPhoto: "/cities/Nuravgram.png", assignedUserId: null, distance: 20, thiefPresent: false, visited: false }
        ]);

        this.vehicleStore = new VehicleStore([
            { id: 1, name: "EV Bike", assignUserId: null, count: 2, bikePhoto: "/vehicle/EV Bike.png", range: 60 },
            { id: 2, name: "EV Car", assignUserId: null, count: 1, bikePhoto: "/vehicle/EV Car.png", range: 100 },
            { id: 3, name: "EV SUV", assignUserId: null, count: 1, bikePhoto: "/vehicle/EV SUV.png", range: 120 }
        ]);
    }

    reset() {
        this.init(); 
    }

    debugState() {
        console.log("Users:", this.userStore.getAllUsers());
        console.log("Cities:", this.cityStore.getAllCities());
        console.log("Vehicles:", this.vehicleStore.getAllVehicles());
    }
}

const appState = new AppState();
export default appState;
