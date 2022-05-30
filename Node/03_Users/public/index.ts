async function handleGetUser1() {
    try {
        console.log('Get User 1 Clicked');
        //@ts-ignore
        const { data } = await axios.get('/api/user1');
        const { users, error } = data;
        console.log(users)
        if (error) throw new Error(error);
        renderUser(users);
    } catch (error) {
        console.error(error);
    }
}

async function handleGetUser2() {
    try {
        console.log('Get User 2 Clicked');
        //@ts-ignore
        const { data } = await axios.get('/api/user2');
        const { users, error } = data;
        console.log(users)
        if (error) throw new Error(error);
        renderUser(users);
    } catch (error) {
        console.error(error)
    }
}

async function handleGetUser3() {
    try {
        console.log('Get User 3 Clicked');
        //@ts-ignore
        const { data } = await axios.get('/api/user3');
        const { users, error } = data;
        console.log(users)

        if (error) throw new Error(error);
        renderUser(users);
    } catch (error) {
        console.error(error)
    }
}

async function handleGetUser4() {
    try {
        console.log('Get User 4 Clicked');
        //@ts-ignore
        const { data } = await axios.get('/api/user4');
        const { users, error } = data;
        console.log(users)

        if (error) throw new Error(error);
        renderUser(users);
    } catch (error) {
        console.error(error)
    }
}

async function handleGetUser5() {
    try {
        console.log('Get User 5 Clicked');
        //@ts-ignore
        const { data } = await axios.get('/api/user5');
        const { users, error } = data;
        console.log(users)

        if(error) throw new Error(error);

        renderUser(users);
    } catch (error) {
        console.error(error)
    }
}

async function handleGetAllUsers(){
    try {
        console.log('Get All Users Clicked');
        //@ts-ignore
        const { data } = await axios.get('/api/all-users');
        console.log(data);
        const {users, error} = data;
        console.log(users);
        if(error) throw new Error(error);
        renderAllUsers(users);
    } catch (error) {
        console.error(error);
    }
}

function renderUser(user: User){
    const root = document.querySelector('#root') as HTMLParagraphElement;
    const root1 = document.querySelector('#root1') as HTMLParagraphElement;
    const root2 = document.querySelector('#root2') as HTMLParagraphElement;
    const root3 = document.querySelector('#root3') as HTMLParagraphElement;
    let gender = 'MR.'
    if(!user.gender){
        gender = 'MS.'
    }
    root.innerText = `Hello ${gender} ${user.lastName}!`;
    root1.innerText = `Full Name: ${user.firstName} ${user.lastName}`;
    root2.innerText = `Your birthdate is: ${user.birthdate}`;
    root3.innerText = `Your Age: ${user.age}`;
}

function renderAllUsers(users: Array<User>){
    const profile = document.querySelector('.profile') as HTMLDivElement; 
    let html = '';
    users.forEach(user => {
        html += `Hello ${user.firstName} ${user.lastName} you are ${user.age} years old.<br> `;
    });
    profile.innerHTML = html;
}