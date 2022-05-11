function handleClickShow(){
    getAllMemes();
}

async function getAllMemes() {
    try {
        // @ts-ignore
        const { data } = await axios.get('/show-memes');
        console.log(data);

        const { memes, error } = data;
        if (error) throw new Error(error);

        renderMemes(memes);

    } catch (error) {
        console.log(error);
    }
}

function renderMemes(memes: Array<Memes>){
    const root = document.querySelector('#root') as HTMLDivElement;

    let html = '';
    memes.forEach((meme) => {
        html += `<p>${meme.des}</p>
                 <img src="${meme.src}" id="${meme.id}"></img>`;
    });
    root.innerHTML = html;
}

