// CityStore.js
class CityStore {
    constructor(cities) {
        this.cityMap = new Map();
        cities.forEach(city => this.cityMap.set(city.id, city));
    }

    getAllCities() {
        return Array.from(this.cityMap.values());
    }

    getCityById(id) {
        return this.cityMap.get(id);
    }

    assignUserToCity(cityId, userId) {
        const city = this.cityMap.get(cityId);
        if (!city) return false;
        city.assignedUserId = userId;
        city.visited = true;
        this.cityMap.set(cityId, city);
        return true;
    }

    unassignUserFromCity(cityId) {
        const city = this.cityMap.get(cityId);
        if (!city || city.assignedUserId === null) return false;
        city.assignedUserId = null;
        this.cityMap.set(cityId, city);
        return true;
    }

    setThief() {
        const cities = Array.from(this.cityMap.values());
        cities.forEach(city => city.thiefPresent = false);
        const randomIndex = Math.floor(Math.random() * cities.length);
        cities[randomIndex].thiefPresent = true;
        this.cityMap.set(cities[randomIndex].id, cities[randomIndex]);
    }

}

export default CityStore;
