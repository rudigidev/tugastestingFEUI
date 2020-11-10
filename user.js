const axios = require ('axios');

class Users {
    static async all() {
        let res = await axios.get('https://localhost:3000/users');
        return res;
    }
}
module.exports = Users;