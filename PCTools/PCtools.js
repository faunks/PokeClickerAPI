
// Merge some functions. can be use to add content to a function
function mergeFunctions(...functions) {
    return function(...args) {
        for (let func of functions) {
            func.apply(this, args);
        }
    };
}

function changeRoute(route, region = player.region) {
    player.route = route;
    player.region = region;
    Battle.generateNewEnemy();  // Generates a new enemy for the selected route
    console.log(`Route changed to ${route} in region ${region}.`);
}

function changePokemonName(newName) {
    if (Battle.enemyPokemon()) {
        Battle.enemyPokemon().name = newName;
        console.log(`Enemy Pokémon name changed to ${newName}`);
    }
}

function startCustomTrainerBattle(trainerName, trainerPokemon, playerPokemon) {
    // Set trainer details
    const trainer = {
        name: trainerName,
        pokemon: trainerPokemon, // Array of Pokémon
    };
    
    // Set player's party to custom Pokémon
    App.game.party.caughtPokemon = playerPokemon;
    
    // Start the battle
    Battle.generateNewEnemy(); 
    console.log(`Started a battle with trainer ${trainerName}`);
}

function changeBattleBackground(backgroundUrl) {
    document.querySelector('.battle-background').style.backgroundImage = `url('${backgroundUrl}')`;
}

function changeBattlePokemonStats(newStats) {
    let enemyPokemon = Battle.enemyPokemon();
    if (enemyPokemon) {
        Object.assign(enemyPokemon, newStats);
        console.log(`Enemy Pokémon stats updated`);
    }
}

function switchPlayerParty(customParty) {
    App.game.party.caughtPokemon = customParty;
    console.log('Player’s party switched.');
}

function addCustomPokemon(name, type1, type2, stats) {
    const newPokemon = {
        name: name,
        type1: type1,
        type2: type2,
        ...stats // HP, attack, defense, etc.
    };
    pokemonMap[name] = newPokemon;
    console.log(`Custom Pokémon ${name} added.`);
}

function changePokemonProperties(pokemonName, newProperties) {
    if (pokemonMap[pokemonName]) {
        Object.assign(pokemonMap[pokemonName], newProperties);
        console.log(`${pokemonName}'s properties updated.`);
    }
}

function changePlayerProfile(property, value) {
    player[property] = value;
    console.log(`Player's ${property} updated to ${value}.`);
}

function setPlayerAttack(clickAttack, pokemonAttack) {
    player.clickAttack = clickAttack;
    App.game.party.calculatePokemonAttack = () => pokemonAttack;
    console.log(`Player's attack values updated.`);
}

function toggleElementVisibility(selector, show) {
    const element = document.querySelector(selector);
    if (element) {
        element.style.display = show ? 'block' : 'none';
    }
}


// Function to evaluate an XPath expression and return the first matched element
function getElementByXPath(xpath) {
    return document.evaluate(
        xpath,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
    ).singleNodeValue;
}

// Create an element and add it to the DOM
function AddElement(tag, parentElement = document.body) {
    const element = document.createElement(tag);
    parentElement.appendChild(element); // Append to a parent element (defaults to body)
    return element; // Return the created element for further manipulation
}

// Get a property of an element
function getProperty(element, property) {
    return element[property];
}

// Set a property of an element
function setProperty(element, property, value) {
    element[property] = value;
}


console.log("PokeClickerAPI is loaded")
// This script got some tools for modding the game
// Made by faunks AKA faunksys🔥
// and with help of the only "person" who wanted to help me ChatGPT
