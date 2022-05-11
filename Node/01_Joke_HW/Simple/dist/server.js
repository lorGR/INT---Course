var express = require('epxress');
var app = express();
var port = process.env.port || 3000;
app.use(express.static('public'));
app.get('/', function (req, res) {
    res.send('hi');
});
app.listen(port, function () {
    console.log("LISTENING ON PORT " + port);
});
