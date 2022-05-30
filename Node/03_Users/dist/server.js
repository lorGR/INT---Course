var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use(express.static('public')); // Allows to use static files
var users = [
    {
        firstName: 'Lior',
        lastName: 'Grishin',
        age: 23,
        gender: true,
        birthdate: '01/12/1998'
    },
    {
        firstName: 'Daniel',
        lastName: 'Oronsi',
        age: 23,
        gender: true,
        birthdate: '19/01/1999'
    },
    {
        firstName: 'Roie',
        lastName: 'Goldstien',
        age: 22,
        gender: true,
        birthdate: '18/10/1999'
    },
    {
        firstName: 'Dana',
        lastName: 'Kemper',
        age: 33,
        gender: false,
        birthdate: '29/12/1988'
    },
    {
        firstName: 'Alex',
        lastName: 'Gubin',
        age: 18,
        gender: false,
        birthdate: '29/01/2004'
    }
];
app.get('/api/user1', function (req, res) {
    try {
        res.send({ users: users[0] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get('/api/user2', function (req, res) {
    try {
        res.send({ users: users[1] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get('/api/user3', function (req, res) {
    try {
        res.send({ users: users[2] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get('/api/user4', function (req, res) {
    try {
        res.send({ users: users[3] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get('/api/user5', function (req, res) {
    try {
        res.send({ users: users[4] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get('/api/all-users', function (req, res) {
    try {
        res.send({ users: users });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.listen(port, function () {
    console.log('Server running on port 3000');
});
