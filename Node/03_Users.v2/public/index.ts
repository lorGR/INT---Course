async function handleGetUser1() {
    //@ts-ignore
    const { data } = await axios.get('/api/user1');
    const { user, error } = data;

    renderUser(user);

    if (error) throw new Error(error);
}

async function handleGetUser2() {
    //@ts-ignore
    const { data } = await axios.get('/api/user2');
    const { user, error } = data;

    renderUser(user);

    if (error) throw new Error(error);
}

async function handleGetUser3() {
    //@ts-ignore
    const { data } = await axios.get('/api/user3');
    const { user, error } = data;

    renderUser(user);

    if (error) throw new Error(error);
}

async function handleGetUser4() {
    //@ts-ignore
    const { data } = await axios.get('/api/user4');
    const { user, error } = data;

    renderUser(user);

    if (error) throw new Error(error);
}

async function handleGetUser5() {
    //@ts-ignore
    const { data } = await axios.get('/api/user5');
    const { user, error } = data;

    renderUser(user);

    if (error) throw new Error(error);
}

async function handleGetAllUsers() {
    //@ts-ignore
    const { data } = await axios.get('/api/get-users');
    const { users, error } = data;

    console.log(users);

    renderAllUsers(users);
}

async function handleDeleteUser(userId: string) {
    // Sending to the server the userID we want to delete..
    //@ts-ignore
    const { data } = await axios.delete('/api/delete-user', { data: { userId } });
    const { users, error } = data;
    console.log(users);

    renderAllUsers(users);
}

async function handleUpdateAge(event: any, userId: string) {
    try {
        const newAge: number = event.target.valueAsNumber;
        //@ts-ignore
        const { data } = await axios.put('/api/update-age', { userId, newAge });
        const { users, error } = data;
        if (error) throw new Error(error);
        renderAllUsers(users);
    } catch (error) {
        console.error(error);
    }
}

async function handleUpdateFirstName(event: any, userId: string) {
    try {
        const firstName: string = event.target.value;
        console.log(firstName)
        //@ts-ignore
        const { data } = await axios.put('/api/update-first-name', { userId, firstName });

        const { users, error } = data;

        if (error) throw new Error(error);

        renderAllUsers(users);

    } catch (error) {
        console.error(error);
    }
}

async function handleUpdateLastName(event: any, userId: string) {
    try {
        const lastName = event.target.value;
        //@ts-ignore
        const { data } = await axios.put('/api/update-last-name', { userId, lastName });
        const { users, error } = data;

        if(error) throw new Error(error);

        renderAllUsers(users);

    } catch (error) {
        console.error(error)
    }
}

async function handleAddUser(event: any) {
    try {
        event.preventDefault();

        const firstName: string = event.target.elements.firstName.value;
        const lastName: string = event.target.elements.lastName.value;
        const age: number = event.target.elements.age.valueAsNumber;

        if (!firstName || !lastName || !age) throw new Error('All fields are requierd!');

        console.log(firstName);
        console.log(lastName);
        console.log(age);

        //@ts-ignore
        const { data } = await axios.post('/api/add-user', { firstName, lastName, age });
        const { users, error } = data;
        if (error) throw new Error(error);
        renderAllUsers(users)
    } catch (error) {
        console.error(error)
    }
}

function renderAllUsers(users: Array<User>) {
    const root = document.querySelector('#root');
    let html = '';
    users.forEach(user => {
        html +=
            `<p>${user.firstName} ${user.lastName}, ${user.age} years old.
            <input type="text" placeholder="First Name:" onblur="handleUpdateFirstName(event, '${user.uid}')"/>
            <input type="text" placeholder="Last Name:" onblur="handleUpdateLastName(event, '${user.uid}')"/>
            <input type="number" placeholder="Age:" onblur="handleUpdateAge(event, '${user.uid}')"/>
            <button onclick=handleDeleteUser('${user.uid}')>Delete User</button>
        </p>`;
    });
    root.innerHTML = html;
}

function renderUser(user: User) {
    const root = document.querySelector('#root');
    let html = '';
    html += `<p>${user.firstName} ${user.lastName}, ${user.age} years old.</p>`;
    root.innerHTML = html;
}