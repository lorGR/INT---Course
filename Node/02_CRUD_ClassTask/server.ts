const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.use(express.json()); // Get body from the client
app.use(express.static('public'));

interface Memes {
    src: string;
    des: string;
    id: string;
}

let memes: Array<Memes> = [
    {
        src: "https://preview.redd.it/lpvf9qvyfyv81.jpg?width=640&crop=smart&auto=webp&s=64bef2f7a192e92e6646d25dd01d04286ceee1df",
        des: "Tonight we feast on potatoes!",
        id: "gf15d61"
    },
    {
        src: "https://preview.redd.it/lf34avblauq81.jpg?width=640&crop=smart&auto=webp&s=0b2ee058f3936688d80c3e21c94ddf65e686a072",
        des: "Guess what I will have for my salad",
        id: "8ewsa74",
    },
    {
        src: "https://preview.redd.it/9003bd4d6fk81.jpg?width=640&crop=smart&auto=webp&s=9cd2a0ca33114efb10afabc89968355d224d7c14",
        des: "The biggest carrot ever",
        id: "df8h4d8",
    }
];

app.get('/show-memes', (req, res) => {
    try {
        res.send({ memes });
    } catch (error) {
        res.send({ error: error.message });
    }
})

app.delete('/delete-meme', (req, res) => {
    try {
        const { memeID } = req.body;
        if (!memeID) throw new Error("Meme ID isn't found.");

        memes = memes.filter(meme => meme.id !== memeID)
        console.log(memes); // Retruns a new array of new memes without the one that was clicked delete
        res.send({ memes });

    } catch (error) {
        res.send({ error: error.message })
    }
})

app.listen(port, () => {
    console.log(`LISTENING ON PORT ${port}`);
})