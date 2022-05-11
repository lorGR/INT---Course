var express = require('express');
var app = express();
var port = process.env.port || 3000;
app.use(express.static('public'));
app.get('/joke1', function (req, res) {
    res.send('What do you call a boomerang that won’t come back? - A stick.');
});
app.get('/joke2', function (req, res) {
    res.send('What does a cloud wear under his raincoat? - Thunderwear.');
});
app.get('/joke3', function (req, res) {
    res.send('Two pickles fell out of a jar onto the floor. What did one say to the other? - Dill with it.');
});
app.listen(port, function () {
    console.log("LISTENING ON PORT " + port);
});
