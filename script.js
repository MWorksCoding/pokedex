let currentPokemon;
const url = 'https://pokeapi.co/api/v2/pokemon/';
let pokemonCollection = [];
let pokemonSelection = 20;
let pokemonAllSelection = 904;
let pokemonForKeyboardNavigation = [];

// ************* Load Pokemon Selection *************

async function loadPokemons() {
    document.getElementById('pokedex').classList.add('overflow-hidden');
    for (let i = 0; i < pokemonSelection; i++) {
        const pokemon_url = url + (i + 1);
        let response = await fetch(pokemon_url); // Zugriff auf API
        currentPokemon = await response.json(); // Umwandlung JSON
        pokemonCollection.push(currentPokemon); // Push
        renderPokemonSelectionScreen(i);
        setTimeout(function () {
            document.getElementById(`loading-screen`).classList.add(`d-none`);
            document.getElementById('pokedex').classList.remove('d-none');
        }, 2500);
    }
}

function renderPokemonSelectionScreen(i) {
    let name = pokemonCollection[i][`name`];
    let id = pokemonCollection[i][`id`];
    let types = pokemonCollection[i][`types`][0][`type`][`name`];
    let img = pokemonCollection[i][`sprites`][`other`][`official-artwork`][`front_default`];
    let container = document.getElementById('pokedex');
    container.innerHTML += '';
    container.innerHTML += renderPokemonCard(i, name, id, types, img);
    typeBg(i);
}

function typeBg(i) {
    let name = pokemonCollection[i].types[0].type.name;
    if (name == name) {
        document.getElementById(`pokemon-info-content-bg(${i})`).classList.add(name)
    };
}

// ************* Pokemon Card *************

function showCurrentPokemon(i) {
    document.getElementById('pokemon-selection').classList.remove('d-none');
    let name = pokemonCollection[i][`name`];
    let types = pokemonCollection[i][`types`][0][`type`][`name`];
    let img = pokemonCollection[i][`sprites`][`other`][`official-artwork`][`front_default`];
    let height = pokemonCollection[i][`height`];
    let weight = pokemonCollection[i][`weight`];
    let hpStat = pokemonCollection[i][`stats`][0][`base_stat`];
    let attackStat = pokemonCollection[i][`stats`][1][`base_stat`];
    let defenseStat = pokemonCollection[i][`stats`][2][`base_stat`];
    let specialAttackStat = pokemonCollection[i][`stats`][3][`base_stat`];
    let specialDefenseStat = pokemonCollection[i][`stats`][4][`base_stat`];
    let speedStat = pokemonCollection[i][`stats`][5][`base_stat`];
    let container = document.getElementById('pokemon-selection');
    container.innerHTML = renderCurrentPokemonStats(i, name, img, types, height, weight, hpStat, attackStat, defenseStat, specialAttackStat, specialAttackStat, specialDefenseStat, speedStat);
    currentTypeBg(i);
    pokemonForKeyboardNavigation.push(i);
}

function currentTypeBg(i) {
    let name = pokemonCollection[i].types[0].type.name;
    if (name == name) {
        document.getElementById(`current-pokemon-card-bg(${i})`).classList.add(name)
    };
}

function closeCurrentPokemon() {

    pokemonForKeyboardNavigation.splice(0, pokemonForKeyboardNavigation.length);

    document.getElementById('pokemon-selection').classList.add('d-none');
}

function nextPokemon(i) {
    if (i < pokemonCollection.length - 1) {
        i++;
    } else {
        i = 0;
    }
    document.getElementById('pokemon-selection').innerHTML = '';
    showCurrentPokemon(i);
    pokemonForKeyboardNavigation.splice(0, 1);
}

function previousPokemon(i) {
    if (i !== 0) {
        i--;
        if (i == -1) {
            i = 0;
            i = pokemonCollection.length - 1;
        }
    } else {
        i = pokemonCollection.length - 1;
    }
    document.getElementById('pokemon-selection').innerHTML = '';
    showCurrentPokemon(i);
    pokemonForKeyboardNavigation.splice(0, 1);
}

// ************* Side Menu *************

function showMenu() {
    let sideMenu = document.getElementById('menu');
    sideMenu.innerHTML = showSideMenu();
    document.getElementById('menu').classList.add('show-overlay-menu');
}
function closeMenu() {
    document.getElementById('menu').classList.remove('show-overlay-menu');
}

// ************* Search Bar *************

function showSearchBar() {
    document.getElementById('show-search-bar-close-button').classList.remove('d-none')
}

function closeSearchBar() {
    document.getElementById('show-search-bar-close-button').classList.add('d-none')
}

function searchPokemonByName() {
    let search = document.getElementById('search-pokemon-by-name').value;
    search = search.toLowerCase();
    let list = document.getElementById('pokedex');
    list.innerHTML = '';
    for (let i = 0; i < pokemonCollection.length; i++) {
        let name = pokemonCollection[i][`name`];
        let id = pokemonCollection[i][`id`];
        let types = pokemonCollection[i][`types`][0][`type`][`name`];
        let img = pokemonCollection[i][`sprites`][`other`][`official-artwork`][`front_default`];
        if (name.toLowerCase().includes(search)) {
            list.innerHTML += renderPokemonCard(i, name, id, types, img);
            typeBg(i);
        }
    }
}

function showPokemonName() {
    closeTypeBar();
    closeMenu();
}

// ************* Load More Section *************

function loadMore() {
    showLoadingScreen();
    let list = document.getElementById('pokedex');
    list.innerHTML = '';
    pokemonSelection += 20;
    pokemonCollection = []; // WICHTIG: LISTE ERST LEEREN!!
    loadPokemons();
}

async function loadAll() {
    showLoadingScreen();
    let loadAll = document.getElementById('pokedex');
    loadAll.innerHTML = '';
    pokemonCollection = [];
    for (let i = 0; i < pokemonAllSelection; i++) {
        const pokemon_url = url + (i + 1);
        let response = await fetch(pokemon_url); // Zugriff auf API
        currentPokemon = await response.json(); // Umwandlung JSON
        pokemonCollection.push(currentPokemon); // Push
        renderPokemonSelectionScreen(i);
        setTimeout(function () {
            document.getElementById(`loading-screen`).classList.add(`d-none`);
        }, 6000);
    }
}

function showLoadingScreen() {
    document.getElementById(`loading-screen`).classList.remove(`d-none`);
    document.getElementById(`pokedex`).classList.add(`d-none`);
}

// ************* Amount Bar *************

function showAmountBar() {
    document.getElementById('show-amount-bar').classList.remove('d-none')
}

function closeAmountBar() {
    document.getElementById('show-amount-bar').classList.add('d-none')
    document.getElementById('error-message').classList.add('d-none')
}

function showPokemonAmount() {
    let amountContainer = document.getElementById('pokedex');
    amountContainer.innerHTML = '';
    let pokemonAmount = document.getElementById('pokemon-amount').value;
    if (pokemonAmount == 0) {
        document.getElementById(`error-message`).classList.remove('d-none');
    } else {
        document.getElementById(`loading-screen`).classList.remove(`d-none`);
        pokemonSelection = parseInt(pokemonAmount);
        pokemonCollection = [];     // WICHTIG: LISTE ERST LEEREN!!
        loadPokemons();
        document.getElementById(`pokemon-amount`).value = ``;
        document.getElementById(`error-message`).classList.add('d-none');
        closeAmountBar();
        closeMenu();
    };
}

window.addEventListener("keydown",
    e => {
        // console.log(e);
        if (e.key == "ArrowLeft") {
            previousPokemon(pokemonForKeyboardNavigation);
        }
        if (e.key == "ArrowRight") {
            nextPokemon(pokemonForKeyboardNavigation);
        }
        if (e.key == "Escape") {
            closeCurrentPokemon();
            closeMenu();
        }
    });