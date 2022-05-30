//@ts-ignore
var express = require('express');
var app = express();
//@ts-ignore
var port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static('public'));
;
var users = [
    {
        firstName: 'Lior',
        lastName: 'Grishin',
        age: 23,
        uid: uniqueId()
    },
    {
        firstName: 'Daniel',
        lastName: 'Oronsi',
        age: 23,
        uid: uniqueId()
    },
    {
        firstName: 'Roie',
        lastName: 'Goldstien',
        age: 22,
        uid: uniqueId()
    },
    {
        firstName: 'Dana',
        lastName: 'Kemper',
        age: 33,
        uid: uniqueId()
    },
    {
        firstName: 'Alex',
        lastName: 'Gubin',
        age: 18,
        uid: uniqueId()
    }
];
app.get('/api/user1', function (req, res) {
    try {
        res.send({ user: users[0] });
    }
    catch (error) {
        res.send(error);
    }
});
app.get('/api/user2', function (req, res) {
    try {
        res.send({ user: users[1] });
    }
    catch (error) {
        res.send(error);
    }
});
app.get('/api/user3', function (req, res) {
    try {
        res.send({ user: users[2] });
    }
    catch (error) {
        res.send(error);
    }
});
app.get('/api/user4', function (req, res) {
    try {
        res.send({ user: users[3] });
    }
    catch (error) {
        res.send(error);
    }
});
app.get('/api/user5', function (req, res) {
    try {
        res.send({ user: users[4] });
    }
    catch (error) {
        res.send(error);
    }
});
app.get('/api/get-users', function (req, res) {
    try {
        res.send({ users: users });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app["delete"]('/api/delete-user', function (req, res) {
    try {
        var userId_1 = req.body.userId;
        if (!userId_1)
            throw new Error("userID wasn't found");
        users = users.filter(function (user) { return user.uid !== userId_1; });
        res.send({ users: users });
    }
    catch (error) {
        res.send(error);
    }
});
app.put('/api/update-age', function (req, res) {
    try {
        var _a = req.body, userId_2 = _a.userId, newAge = _a.newAge;
        if (!userId_2)
            throw new Error("User ID wasn't found");
        if (!newAge)
            throw new Error("Age is required!");
        var userIndex = users.findIndex(function (user) { return user.uid === userId_2; });
        if (userIndex === -1)
            throw new Error('User not found');
        users[userIndex].age = newAge;
        res.send({ users: users });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.put('/api/update-first-name', function (req, res) {
    try {
        var _a = req.body, userId_3 = _a.userId, firstName = _a.firstName;
        if (!userId_3)
            throw new Error("User ID wasn't found");
        if (!firstName)
            throw new Error("First Name wasn't found");
        var userIndex = users.findIndex(function (user) { return user.uid === userId_3; });
        if (userIndex === -1)
            throw new Error("User ID wasn't found");
        users[userIndex].firstName = firstName;
        res.send({ users: users });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.put('/api/update-last-name', function (req, res) {
    try {
        var _a = req.body, userId_4 = _a.userId, lastName = _a.lastName;
        if (!userId_4)
            throw new Error("User ID wasn't found");
        if (!lastName)
            throw new Error("Last Name wasn't found");
        var userIndex = users.findIndex(function (user) { return user.uid === userId_4; });
        if (userIndex === -1)
            throw new Error("User ID wasn't found");
        users[userIndex].lastName = lastName;
        res.send({ users: users });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.post('/api/add-user', function (req, res) {
    try {
        var _a = req.body, firstName = _a.firstName, lastName = _a.lastName, age = _a.age;
        if (!firstName)
            throw new Error('First Name is required!');
        if (!lastName)
            throw new Error('Last Name is required!');
        if (!age)
            throw new Error('Age is required!');
        var user = { firstName: firstName, lastName: lastName, age: age, uid: uniqueId() };
        users.push(user);
        res.send({ users: users });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.listen(port, function () {
    console.log("Server running on port " + port);
});
function uniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
}
