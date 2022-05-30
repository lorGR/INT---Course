//@ts-ignore
const express = require('express');
const app = express();
//@ts-ignore
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

interface User {
    firstName: string,
    lastName: string,
    age: number,
    uid: string
};

let users: Array<User> = [ // Fake data base of users
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

app.get('/api/user1', (req, res) => {
    try {
        res.send({ user: users[0] });
    } catch (error) {
        res.send(error)
    }
});

app.get('/api/user2', (req, res) => {
    try {
        res.send({ user: users[1] });
    } catch (error) {
        res.send(error)
    }
});

app.get('/api/user3', (req, res) => {
    try {
        res.send({ user: users[2] });
    } catch (error) {
        res.send(error)
    }
});

app.get('/api/user4', (req, res) => {
    try {
        res.send({ user: users[3] });
    } catch (error) {
        res.send(error)
    }
});

app.get('/api/user5', (req, res) => {
    try {
        res.send({ user: users[4] });
    } catch (error) {
        res.send(error)
    }
});

app.get('/api/get-users', (req, res) => {
    try {
        res.send({ users });
    } catch (error) {
        res.send({ error: error.message });
    }
});

app.delete('/api/delete-user', (req, res) => {
    try {
        const { userId } = req.body;
        if (!userId) throw new Error("userID wasn't found");

        users = users.filter(user => user.uid !== userId);
        res.send({ users });

    } catch (error) {
        res.send(error)
    }
});

app.put('/api/update-age', (req, res) => {
    try {
        const { userId, newAge } = req.body;
        if (!userId) throw new Error("User ID wasn't found");
        if (!newAge) throw new Error("Age is required!");

        const userIndex = users.findIndex(user => user.uid === userId);
        if (userIndex === -1) throw new Error('User not found');

        users[userIndex].age = newAge;

        res.send({ users });

    } catch (error) {
        res.send({ error: error.message });
    }
});

app.put('/api/update-first-name', (req, res) => {
    try {
        const { userId, firstName } = req.body;
        if (!userId) throw new Error("User ID wasn't found");
        if (!firstName) throw new Error("First Name wasn't found")

        const userIndex = users.findIndex(user => user.uid === userId)

        if(userIndex === -1 ) throw new Error("User ID wasn't found");

        users[userIndex].firstName = firstName;

        res.send({users});

    } catch (error) {
        res.send({ error: error.message });
    }
});

app.put('/api/update-last-name', (req, res) => {
    try {
        const { userId, lastName} = req.body;
        if (!userId) throw new Error("User ID wasn't found");
        if (!lastName) throw new Error("Last Name wasn't found");

        const userIndex = users.findIndex(user => user.uid === userId);

        if(userIndex === -1) throw new Error("User ID wasn't found");

        users[userIndex].lastName = lastName;

        res.send({ users });

    } catch (error) {
        res.send({error: error.message});
    }
});

app.post('/api/add-user', (req, res) => {
    try {
        const { firstName, lastName, age } = req.body;

        if (!firstName) throw new Error('First Name is required!');
        if (!lastName) throw new Error('Last Name is required!');
        if (!age) throw new Error('Age is required!');

        const user: User = { firstName: firstName, lastName: lastName, age: age, uid: uniqueId() }

        users.push(user);

        res.send({ users });

    } catch (error) {
        res.send({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

function uniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
} 