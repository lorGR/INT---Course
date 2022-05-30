async function handleClickShow() {
    try {
        // @ts-ignore
        const { data } = await axios.get('/show-memes');

        const { memes, error } = data;
        if (error) throw new Error(error);

        renderMemes(memes);

    } catch (error) {
        console.log(error);
    }
}

// async function getAllMemes() {
//     try {
//         // @ts-ignore
//         const { data } = await axios.get('/show-memes');

//         const { memes, error } = data;
//         if (error) throw new Error(error);

//         renderMemes(memes);

//     } catch (error) {
//         console.log(error);
//     }
// }

function renderMemes(memes: Array<Memes>) {
    const root = document.querySelector('#root') as HTMLDivElement;
    
    let html = ``;
    memes.forEach((meme) => {
        html += `<p>${meme.des}</p>
        <button onclick='handleDeleteMeme("${meme.id}")'>Delete</button>
        <img src="${meme.src}">`;
    });
    root.innerHTML = html;
}

async function handleDeleteMeme(memeID: string) {
    try {
        // @ts-ignore
        const { data } = await axios.delete('/delete-meme', {data: { memeID } });

        const { memes , error } = data;
        if(error) throw new Error(error);

        renderMemes(memes);
    } catch (error) {
        console.error(error);
    }
}

