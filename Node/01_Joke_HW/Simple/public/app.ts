const joke1 = document.querySelector('#j1');
const joke2 = document.querySelector('#j2');
const joke3 = document.querySelector('#j3');
const p = document.querySelector('p');

joke1.addEventListener('click', ()=> {
    axios.get('/joke1')
    .then(({data}) => {
        p.innerText = data;
    })
})

joke2.addEventListener('click', ()=> {
    axios.get('/joke2')
    .then(({data}) => {
        p.innerText = data;
    })
})

joke3.addEventListener('click', ()=> {
    axios.get('/joke3')
    .then(({data}) => {
        p.innerText = data;
    })
})