//@ts-ignore
var express = require('express');
//@ts-ignore
var port = process.env.PORT || 3000;
var app = express();
app.use(express.static('public'));
app.use(express.json());
;
var arrActionGames = [
    {
        gameName: "Apex Legends",
        gamePrice: "Free To Play",
        price: "",
        src: "https://images.everyeye.it/img-coververt/apex-legends-v17-41457-300x500.jpg"
    },
    {
        gameName: "Monster Hunter Rise",
        gamePrice: "59.99",
        price: "$",
        src: "https://m.media-amazon.com/images/I/51hX8d6+yaL._AC_SY780_.jpg"
    },
    {
        gameName: "The Elder Scrolls Online",
        gamePrice: "24.99",
        price: "$",
        src: "https://howlongtobeat.com/games/The_Elder_scrolls_online_logo.jpg"
    },
    {
        gameName: "Tom Clancy's Rainbow Six Siege",
        gamePrice: "29.99",
        price: "$",
        src: "https://www.mobygames.com/images/covers/l/413057-tom-clancy-s-rainbow-six-siege-windows-front-cover.jpg"
    },
    {
        gameName: "Sea of Thieves",
        gamePrice: "24.99",
        price: "$",
        src: "https://freshcomics.s3.amazonaws.com/issue_covers/MAR181944.jpg"
    },
    {
        gameName: "FINAL FANTASY ONLINE",
        gamePrice: "5.99",
        price: "$",
        src: "https://www.mobygames.com/images/covers/l/198974-final-fantasy-xiv-online-collector-s-edition-windows-front-cover.jpg"
    },
    {
        gameName: "V Rising",
        gamePrice: "14.99",
        price: "$",
        src: "data:image/jpeg;base64,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"
    },
    {
        gameName: "Destiny 2",
        gamePrice: "Free To Play",
        price: "",
        src: "https://www.mobygames.com/images/covers/l/433360-destiny-2-playstation-4-front-cover.jpg"
    },
    {
        gameName: "It Takes Two",
        gamePrice: "19.99",
        price: "$",
        src: "https://www.mobygames.com/images/covers/l/726221-it-takes-two-playstation-4-front-cover.jpg"
    }
];
var arrRolePlayingGames = [
    {
        gameName: "My Time at Sandrock",
        gamePrice: "14.99",
        price: "$",
        src: ""
    },
];
app.get('/api/action-games', function (req, res) {
    try {
        res.send({ arrActionGames: arrActionGames });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.listen(port, function () {
    console.log("Server running on port " + port);
});
