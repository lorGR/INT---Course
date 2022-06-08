async function handleActionGames() {
    try {
        //@ts-ignore
        const { data } = await axios.get('/api/action-games');
        const { arrActionGames, error } = data;

        if (error) throw new Error(error);

        renderGames(arrActionGames);

    } catch (error) {
        console.error(error);
    }
}

function renderGames(arr: Array<Game>) {
    const gameShowcase = document.querySelector('#gamesShowcase') as HTMLTableSectionElement;
    arr.forEach(game => {
        gameShowcase.innerHTML += `
        <div class="grid-item">
            <a>
                <p class="item__title">${game.gameName}</p>
                <img class="item__src" src="${game.src}" alt="" >
                <button class="item__price">Price: ${game.gamePrice}${game.price}</button>
            </a>
        </div>`
    });
}