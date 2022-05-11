var express = require('express');
var app = express();
var port = process.env.port || 3000;
app.use(express.static('public'));
var memes = [
    {
        src: "https://preview.redd.it/lpvf9qvyfyv81.jpg?width=640&crop=smart&auto=webp&s=64bef2f7a192e92e6646d25dd01d04286ceee1df",
        des: "Tonight we feast on potatoes!",
        id: "gf15d61"
    },
    {
        src: "https://preview.redd.it/lf34avblauq81.jpg?width=640&crop=smart&auto=webp&s=0b2ee058f3936688d80c3e21c94ddf65e686a072",
        des: "Guess what I will have for my salad",
        id: "8ewsa74"
    },
    {
        src: "https://preview.redd.it/9003bd4d6fk81.jpg?width=640&crop=smart&auto=webp&s=9cd2a0ca33114efb10afabc89968355d224d7c14",
        des: "The biggest carrot ever",
        id: "df8h4d8"
    }
];
app.get('/show-memes', function (req, res) {
    try {
        res.send({ memes: memes });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.listen(port, function () {
    console.log("LISTENING ON PORT " + port);
});
