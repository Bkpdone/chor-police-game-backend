// VehicleStore.js
class VehicleStore {
    constructor(vehicles) {
        this.bikeMap = new Map();
        vehicles.forEach(bike => this.bikeMap.set(bike.id, bike));
    }

    getAllVehicles() {
        return Array.from(this.bikeMap.values());
    }

    getVehicleById(id) {
        return this.bikeMap.get(id);
    }

    assignUserToVehicle(bikeId, userId) {
        const bike = this.bikeMap.get(bikeId);
        if (!bike || bike.count <= 0) return false;
        bike.assignUserId = userId;
        bike.count -= 1;
        this.bikeMap.set(bikeId, bike);
        return true;
    }

    unassignUserFromVehicle(bikeId) {
        const bike = this.bikeMap.get(bikeId);
        if (!bike || bike.assignUserId === null) return false;
        bike.assignUserId = null;
        bike.count += 1;
        this.bikeMap.set(bikeId, bike);
        return true;
    }

}

export default VehicleStore;
