var joke1 = document.querySelector('#j1');
var joke2 = document.querySelector('#j2');
var joke3 = document.querySelector('#j3');
var p = document.querySelector('p');
joke1.addEventListener('click', function () {
    axios.get('/joke1')
        .then(function (_a) {
        var data = _a.data;
        p.innerText = data;
    });
});
joke2.addEventListener('click', function () {
    axios.get('/joke2')
        .then(function (_a) {
        var data = _a.data;
        p.innerText = data;
    });
});
joke3.addEventListener('click', function () {
    axios.get('/joke3')
        .then(function (_a) {
        var data = _a.data;
        p.innerText = data;
    });
});
