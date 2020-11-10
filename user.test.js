const axios = require('axios');
const Users = require('./user');

jest.mock('axios');

test('should fetch users', () => {
    const users = [
        {
            "id" : 1,
            "first_name" : "andre",
            "last_name" : "charlie",
            "email" : "andre2@gmail.com"
        },
        {
            "id" : 2,
            "first_name" : "bagaze",
            "last_name" : "robertoe",
            "email" : "bagaze@gmail.com"
        },
    ];
    const resp = { data : users };
    axios.get.mockImplementation(() => Promise.resolve(resp));
    Users.all().then(resp => expect(resp.data).toEqual(users));
})