// UserStore.js
class UserStore {
    constructor(users) {
        this.userMap = new Map();
        users.forEach(user => this.userMap.set(user.id, user));
    }

    getAllUsers() {
        return Array.from(this.userMap.values());
    }

    getUserById(id) {
        return this.userMap.get(id);
    }
}

export default UserStore;
