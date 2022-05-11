var express = require('express');
var app = express();
var port = process.env.port || 3000;
app.use(express.static('public'));
var jokes = [
    "What do you call a boomerang that won\u2019t come back? - A stick.",
    "What does a cloud wear under his raincoat? - Thunderwear.",
    "Two pickles fell out of a jar onto the floor. What did one say to the other? - Dill with it."
];
var memes = [
    "https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/canvas/2021/10/30/85f2cb5f-44f8-4f2f-a813-63e657e11acc_5065cac7.jpg?itok=gY-K9HdU&v=1635566576",
    "https://www.letseatcake.com/wp-content/uploads/2021/07/Funny-Memes-44.jpg",
    "https://www.boredpanda.com/blog/wp-content/uploads/2021/07/funny-marriage-memes-pics-fb25-png__700.jpg"
];
function getRandIndexOfArray(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
app.get('/', function (req, res) {
    res.send({ jokeOrMeme: getRandIndexOfArray(0, 1)[getRandIndexOfArray(0, 3)] });
});
app.listen(port, function () {
    console.log("LISTENING ON PORT " + port);
});
