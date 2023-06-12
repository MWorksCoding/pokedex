function renderPokemonCard(i, name, id, types, img) {
    return /*html*/ `

    <div class="pokemon-card" onclick="showCurrentPokemon(${i})"> 
    <div class="pokemon-info-content">
        <div id="pokemon-info-content-bg(${i})">
         <div class="pokemon-name-id-space-between">
            <span id="pokemon-name"> ${name} </span>
            <span id="pokemon-id"> # ${id} </span>
         </div>      
            <p id="pokemon-types"> ${types} </p>
        </div>
        <div class="pokemon-pic">
        <img src="${img}" id="pokemon-pic">
        </div>
    </div>
     `;
}

function renderCurrentPokemonStats(i, name, img, types, height, weight, hpStat, attackStat, defenseStat, specialAttackStat, specialAttackStat, specialDefenseStat, speedStat) {
    return /*html*/ `
        <div>
            <img onclick="closeCurrentPokemon()" class="close-pokemon close-selection" src="img/close.png">
            <img onclick="previousPokemon(${i})" class="arrow-left" src="./img/arrow_back.png">
            <img onclick="nextPokemon(${i})" class="arrow-right" src="./img/arrow_forward.png">
        </div>


        <div class="current-pokemon-card" onclick="closeCurrentPokemon()">
            <div id="current-pokemon-card-bg(${i})">
                <span class="current-pokemon-name">${name}</span>

                <div class="type-height-weight-space-around" >
                    <div class="type-height-weight-stats">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Type:</td>
                                    <td>${types}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="type-height-weight-stats">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Height:</td>
                                    <td>${height} ft</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="type-height-weight-stats">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Weight:</td>
                                    <td>${weight} lbs</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

<!-- **************** Pokemon Stats ******************+      -->
            <div class="current-pokemon-pic" >
                <img src="${img}" id="current-pokemon-pic">
            </div>

            <div class="current-pokemon-stats-table" >

            <div class="current-pokemon-stats">
                <table>
                    <tbody>
                        <tr>
                            <td>HP:</td>
                            <td>${hpStat}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="current-pokemon-stats">
                <table>
                    <tbody>
                        <tr>
                            <td>Attack:</td>
                            <td>${attackStat}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="current-pokemon-stats">
                <table>
                    <tbody>
                        <tr>
                            <td>Defense:</td>
                            <td>${defenseStat}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="current-pokemon-stats">
                <table>
                    <tbody>
                        <tr>
                            <td>Special Attack:</td>
                            <td>${specialAttackStat}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="current-pokemon-stats">
                <table>
                    <tbody>
                        <tr>
                            <td>Special Defense:</td>
                            <td>${specialDefenseStat}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="current-pokemon-stats">
                <table>
                    <tbody>
                        <tr>
                            <td>Speed:</td>
                            <td>${speedStat}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
`;
}

function showSideMenu() {
    return /*html*/ `
<!-- ***Menu*** -->
<!-- <div id="menu" class="overlay-menu"> -->
    <div class="info-header mobile-menu-header">
        <!-- <img src="img/pokemon-g89728011f_1280.png" title="Profil" class="profile-icon">&nbsp;&nbsp; -->
        <h3>Pokemon Collection</h3>
        <br>
        <img onclick="closeMenu()" class="close-button-menu" src="img/close.png">
    </div>
    <div class="bg-mobile">

        <!-- ********************  -->
        <div class="info-content-mobile" onclick="showAmountBar()">
            <table>
                <tbody>
                    <tr>
                        <td><img src="img/pokemon-g89728011f_1280.png"></td>
                        <td>Show more Pokemon</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="info-header-mobile d-none" id="show-amount-bar">
            <div class="amount-bar-close-button">
                    <input id="pokemon-amount" type="number" required type="number" value="20" min="1" placeholder="Amount of Pokemon">
                    <button onclick="showPokemonAmount()" id="show-pokemon-amount">Show Pokemon</button>
                    <img onclick="closeAmountBar()" id="close-button-amount" class="close-button-search-bar" src="img/close.png">
            </div>

        </div>
        <div class="info-header-mobile error-message d-none" id="error-message">
            Please enter a number larger than "0"
        </div>
        <!-- ********************  -->
        <div class="info-content-mobile" onclick="showTypeBar()">
            <table>
                <tbody>
                    <tr>
                        <td><img src="img/pokemon-g89728011f_1280.png"></td>
                        <td>Find more Pokemon by type</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="info-header-mobile wrap d-none" id="show-type-bar">
            <span class="grass" id="grass" onclick="showType('grass')">grass</span>
            <span class="fire" id="fire" onclick="showType('fire')">fire</span>
            <span class="water" id="water" onclick="showType('water')">water</span>
            <span class="bug" id="bug" onclick="showType('bug')">bug</span>
            <span class="normal" id="normal" onclick="showType('normal')">normal</span>
            <span class="poison" id="poison" onclick="showType('poison')">poison</span>
            <span class="electric" id="electric" onclick="showType('electric')">electric</span>
            <span class="ground" id="ground" onclick="showType('ground')">ground</span>
            <span class="fairy" id="fairy" onclick="showType('fairy')">fairy</span>
            <span class="fighting" id="fighting" onclick="showType('fighting')">fighting</span>
            <span class="psychic" id="psychic" onclick="showType('psychic')">psychic</span>
            <span class="ghost" id="ghost" onclick="showType('ghost')">ghost</span>
            <span class="rock" id="rock" onclick="showType('rock')">rock</span>
            <span class="ice" id="ice" onclick="showType('ice')">ice</span>
            <span class="dragon" id="dragon" onclick="showType('dragon')">dragon</span>
            <span class="dark" id="dark" onclick="showType('dark')">dark</span>
            <span class="steel" id="steel" onclick="showType('steel')">steel</span>
            <span class="all" onclick="showAllTypes()"> all</span>
            <img onclick="closeTypeBar()" id="type-close-button" class="close-button-search-bar"
                src="img/close.png">
        </div>

        <div class="info-content-mobile" onclick="showSearchBar()">
            <table>
                <tbody>
                    <tr>
                        <td><img src="img/pokemon-g89728011f_1280.png"></td>
                        <td>Search Pokemon by name</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="info-header-mobile d-none" id="show-search-bar-close-button">
            <div class="search-bar-close-button">
                <input onkeyup="searchPokemonByName()" id="search-pokemon-by-name"
                    placeholder="Search Pokemon ..." autocomplete="off">
                    <button onclick="showPokemonName()" id="show-pokemon-name">Show result</button>
                <img onclick="closeSearchBar()" id="show-close-button" class="close-button-search-bar"
                    src="img/close.png">
            </div>
        </div>
    </div>
</div>
`;
}