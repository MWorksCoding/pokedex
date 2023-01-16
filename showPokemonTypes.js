function showAllTypes() {
    let container = document.getElementById('pokedex');
    container.innerHTML = '';
    loadPokemons();
}

function showTypeBar() {
    document.getElementById('show-type-bar').classList.remove('d-none')
}
function closeTypeBar() {
    document.getElementById('show-type-bar').classList.add('d-none')
}

function emptyTypeList() {
    let typeList = document.getElementById('pokedex');
    typeList.innerHTML = '';
}

function closeTypeBarAndCloseMenu() {
    closeTypeBar();
    closeMenu();
}

function showTypeGrass() {
    let grass = document.getElementById('grass').innerHTML;
    emptyTypeList();
    for (let i = 0; i < pokemonCollection.length; i++) {
        let name = pokemonCollection[i][`name`];
        let id = pokemonCollection[i][`id`];
        let types = pokemonCollection[i][`types`][0][`type`][`name`];
        let img = pokemonCollection[i][`sprites`][`other`][`official-artwork`][`front_default`];
        if (grass == types) {
            let typeList = document.getElementById('pokedex');
            typeList.innerHTML += renderPokemonCard(i, name, id, types, img);
            typeBg(i);
        }
    }
    closeTypeBarAndCloseMenu()
}

function showTypeFire() {
    let fire = document.getElementById('fire').innerHTML;
    emptyTypeList();
    for (let i = 0; i < pokemonCollection.length; i++) {
        let name = pokemonCollection[i][`name`];
        let id = pokemonCollection[i][`id`];
        let types = pokemonCollection[i][`types`][0][`type`][`name`];
        let img = pokemonCollection[i][`sprites`][`other`][`official-artwork`][`front_default`];
        if (fire == types) {
            let typeList = document.getElementById('pokedex');
            typeList.innerHTML += renderPokemonCard(i, name, id, types, img);
            typeBg(i);
        }
    }
    closeTypeBarAndCloseMenu()
}

function showTypeWater() {
    let water = document.getElementById('water').innerHTML;
    emptyTypeList();
    for (let i = 0; i < pokemonCollection.length; i++) {
        let name = pokemonCollection[i][`name`];
        let id = pokemonCollection[i][`id`];
        let types = pokemonCollection[i][`types`][0][`type`][`name`];
        let img = pokemonCollection[i][`sprites`][`other`][`official-artwork`][`front_default`];
        if (water == types) {
            let typeList = document.getElementById('pokedex');
            typeList.innerHTML += renderPokemonCard(i, name, id, types, img);
            typeBg(i);
        }
    }
    closeTypeBarAndCloseMenu()
}

function showTypeBug() {
    let bug = document.getElementById('bug').innerHTML;
    emptyTypeList();
    for (let i = 0; i < pokemonCollection.length; i++) {
        let name = pokemonCollection[i][`name`];
        let id = pokemonCollection[i][`id`];
        let types = pokemonCollection[i][`types`][0][`type`][`name`];
        let img = pokemonCollection[i][`sprites`][`other`][`official-artwork`][`front_default`];
        if (bug == types) {
            let typeList = document.getElementById('pokedex');
            typeList.innerHTML += renderPokemonCard(i, name, id, types, img);
            typeBg(i);
        }
    }
    closeTypeBarAndCloseMenu()
}

function showTypeNormal() {
    let normal = document.getElementById('normal').innerHTML;
    emptyTypeList();
    for (let i = 0; i < pokemonCollection.length; i++) {
        let name = pokemonCollection[i][`name`];
        let id = pokemonCollection[i][`id`];
        let types = pokemonCollection[i][`types`][0][`type`][`name`];
        let img = pokemonCollection[i][`sprites`][`other`][`official-artwork`][`front_default`];
        if (normal == types) {
            let typeList = document.getElementById('pokedex');
            typeList.innerHTML += renderPokemonCard(i, name, id, types, img);
            typeBg(i);
        }
    }
    closeTypeBarAndCloseMenu()
}

function showTypePoison() {
    let poison = document.getElementById('poison').innerHTML;
    emptyTypeList();
    for (let i = 0; i < pokemonCollection.length; i++) {
        let name = pokemonCollection[i][`name`];
        let id = pokemonCollection[i][`id`];
        let types = pokemonCollection[i][`types`][0][`type`][`name`];
        let img = pokemonCollection[i][`sprites`][`other`][`official-artwork`][`front_default`];
        if (poison == types) {
            let typeList = document.getElementById('pokedex');
            typeList.innerHTML += renderPokemonCard(i, name, id, types, img);
            typeBg(i);
        }
    }
    closeTypeBarAndCloseMenu()
}

function showTypeElectric() {
    let electric = document.getElementById('electric').innerHTML;
    emptyTypeList();
    for (let i = 0; i < pokemonCollection.length; i++) {
        let name = pokemonCollection[i][`name`];
        let id = pokemonCollection[i][`id`];
        let types = pokemonCollection[i][`types`][0][`type`][`name`];
        let img = pokemonCollection[i][`sprites`][`other`][`official-artwork`][`front_default`];
        if (electric == types) {
            let typeList = document.getElementById('pokedex');
            typeList.innerHTML += renderPokemonCard(i, name, id, types, img);
            typeBg(i);
        }
    }
    closeTypeBarAndCloseMenu()
}

function showTypeGround() {
    let ground = document.getElementById('ground').innerHTML;
    emptyTypeList();
    for (let i = 0; i < pokemonCollection.length; i++) {
        let name = pokemonCollection[i][`name`];
        let id = pokemonCollection[i][`id`];
        let types = pokemonCollection[i][`types`][0][`type`][`name`];
        let img = pokemonCollection[i][`sprites`][`other`][`official-artwork`][`front_default`];
        if (ground == types) {
            let typeList = document.getElementById('pokedex');
            typeList.innerHTML += renderPokemonCard(i, name, id, types, img);
            typeBg(i);
        }
    }
    closeTypeBarAndCloseMenu()
}

function showTypeFairy() {
    let fairy = document.getElementById('fairy').innerHTML;
    emptyTypeList();
    for (let i = 0; i < pokemonCollection.length; i++) {
        let name = pokemonCollection[i][`name`];
        let id = pokemonCollection[i][`id`];
        let types = pokemonCollection[i][`types`][0][`type`][`name`];
        let img = pokemonCollection[i][`sprites`][`other`][`official-artwork`][`front_default`];
        if (fairy == types) {
            let typeList = document.getElementById('pokedex');
            typeList.innerHTML += renderPokemonCard(i, name, id, types, img);
            typeBg(i);
        }
    }
    closeTypeBarAndCloseMenu()
}

function showTypeFighting() {
    let fighting = document.getElementById('fighting').innerHTML;
    emptyTypeList();
    typeList.innerHTML = '';
    for (let i = 0; i < pokemonCollection.length; i++) {
        let name = pokemonCollection[i][`name`];
        let id = pokemonCollection[i][`id`];
        let types = pokemonCollection[i][`types`][0][`type`][`name`];
        let img = pokemonCollection[i][`sprites`][`other`][`official-artwork`][`front_default`];
        if (fighting == types) {
            let typeList = document.getElementById('pokedex');
            typeList.innerHTML += renderPokemonCard(i, name, id, types, img);
            typeBg(i);
        }
    }
    closeTypeBarAndCloseMenu()
}

function showTypePsychic() {
    let psychic = document.getElementById('psychic').innerHTML;
    emptyTypeList();
    for (let i = 0; i < pokemonCollection.length; i++) {
        let name = pokemonCollection[i][`name`];
        let id = pokemonCollection[i][`id`];
        let types = pokemonCollection[i][`types`][0][`type`][`name`];
        let img = pokemonCollection[i][`sprites`][`other`][`official-artwork`][`front_default`];
        if (psychic == types) {
            let typeList = document.getElementById('pokedex');
            typeList.innerHTML += renderPokemonCard(i, name, id, types, img);
            typeBg(i);
        }
    }
    closeTypeBarAndCloseMenu()
}

function showTypeGhost() {
    let ghost = document.getElementById('ghost').innerHTML;
    emptyTypeList();
    for (let i = 0; i < pokemonCollection.length; i++) {
        let name = pokemonCollection[i][`name`];
        let id = pokemonCollection[i][`id`];
        let types = pokemonCollection[i][`types`][0][`type`][`name`];
        let img = pokemonCollection[i][`sprites`][`other`][`official-artwork`][`front_default`];
        if (ghost == types) {
            let typeList = document.getElementById('pokedex');
            typeList.innerHTML += renderPokemonCard(i, name, id, types, img);
            typeBg(i);
        }
    }
    closeTypeBarAndCloseMenu()
}

function showTypeRock() {
    let rock = document.getElementById('rock').innerHTML;
    emptyTypeList();
    for (let i = 0; i < pokemonCollection.length; i++) {
        let name = pokemonCollection[i][`name`];
        let id = pokemonCollection[i][`id`];
        let types = pokemonCollection[i][`types`][0][`type`][`name`];
        let img = pokemonCollection[i][`sprites`][`other`][`official-artwork`][`front_default`];
        if (rock == types) {
            let typeList = document.getElementById('pokedex');
            typeList.innerHTML += renderPokemonCard(i, name, id, types, img);
            typeBg(i);
        }
    }
    closeTypeBarAndCloseMenu()
}

function showTypeIce() {
    let ice = document.getElementById('ice').innerHTML;
    emptyTypeList();
    for (let i = 0; i < pokemonCollection.length; i++) {
        let name = pokemonCollection[i][`name`];
        let id = pokemonCollection[i][`id`];
        let types = pokemonCollection[i][`types`][0][`type`][`name`];
        let img = pokemonCollection[i][`sprites`][`other`][`official-artwork`][`front_default`];
        if (ice == types) {
            let typeList = document.getElementById('pokedex');
            typeList.innerHTML += renderPokemonCard(i, name, id, types, img);
            typeBg(i);
        }
    }
    closeTypeBarAndCloseMenu()
}

function showTypeDragon() {
    let dragon = document.getElementById('dragon').innerHTML;
    emptyTypeList();
    for (let i = 0; i < pokemonCollection.length; i++) {
        let name = pokemonCollection[i][`name`];
        let id = pokemonCollection[i][`id`];
        let types = pokemonCollection[i][`types`][0][`type`][`name`];
        let img = pokemonCollection[i][`sprites`][`other`][`official-artwork`][`front_default`];
        if (dragon == types) {
            let typeList = document.getElementById('pokedex');
            typeList.innerHTML += renderPokemonCard(i, name, id, types, img);
            typeBg(i);
        }
    }
    closeTypeBarAndCloseMenu()
}

function showTypeDark() {
    let dark = document.getElementById('dark').innerHTML;
    emptyTypeList();
    for (let i = 0; i < pokemonCollection.length; i++) {
        let name = pokemonCollection[i][`name`];
        let id = pokemonCollection[i][`id`];
        let types = pokemonCollection[i][`types`][0][`type`][`name`];
        let img = pokemonCollection[i][`sprites`][`other`][`official-artwork`][`front_default`];
        if (dark == types) {
            let typeList = document.getElementById('pokedex');
            typeList.innerHTML += renderPokemonCard(i, name, id, types, img);
            typeBg(i);
        }
    }
    closeTypeBarAndCloseMenu()
}

function showTypeSteel() {
    let steel = document.getElementById('steel').innerHTML;
    emptyTypeList();
    for (let i = 0; i < pokemonCollection.length; i++) {
        let name = pokemonCollection[i][`name`];
        let id = pokemonCollection[i][`id`];
        let types = pokemonCollection[i][`types`][0][`type`][`name`];
        let img = pokemonCollection[i][`sprites`][`other`][`official-artwork`][`front_default`];
        if (steel == types) {
            let typeList = document.getElementById('pokedex');
            typeList.innerHTML += renderPokemonCard(i, name, id, types, img);
            typeBg(i);
        }
    }
    closeTypeBarAndCloseMenu()
}
