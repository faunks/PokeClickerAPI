
# PokeClickerAPI Documentation

This script provides several useful tools for modding the PokeClicker game. With this API, developers can manipulate in-game elements like Pokémon battles, trainer properties, UI elements, and more. Below are the functions available in the API, along with examples of usage.

---

## `mergeFunctions(...functions)`
This function merges multiple functions into one. Each time the merged function is called, all merged functions will execute in the order they were passed.

### Usage:

```javascript
let x = function() {
  console.log("sup dude");
};
App.game.pokeballs.usePokeball = mergeFunctions(App.game.pokeballs.usePokeball, x);
```

**Explanation:**
Every time you throw a Pokéball, this prints "sup dude" to the console in addition to the original `usePokeball` logic.

---

## `changeRoute(route, region = player.region)`
This function changes the current route and region of the player. It also generates a new enemy Pokémon based on the selected route.

### Usage:

```javascript
changeRoute(10, 1);  // Changes to route 10 in region 1 (e.g., Kanto)
```

---

## `changePokemonName(newName)`
This function changes the name of the enemy Pokémon currently in battle.

### Usage:

```javascript
changePokemonName('Pikachu');
```

---

## `startCustomTrainerBattle(trainerName, trainerPokemon, playerPokemon)`
This function starts a custom trainer battle with a custom set of Pokémon for both the trainer and the player.

### Usage:

```javascript
startCustomTrainerBattle('Ash', [{ name: 'Bulbasaur' }], [{ name: 'Charizard' }]);
```

---

## `changeBattleBackground(backgroundUrl)`
Changes the battle background to a custom image.

### Usage:

```javascript
changeBattleBackground('https://example.com/background.png');
```

---

## `changeBattlePokemonStats(newStats)`
Modify the stats (HP, Attack, Defense, etc.) of the Pokémon the player is currently battling.

### Usage:

```javascript
changeBattlePokemonStats({ health: 1000, attack: 500 });
```

---

## `switchPlayerParty(customParty)`
Replace the player’s party with a custom premade party.

### Usage:

```javascript
switchPlayerParty([{ name: 'Blastoise', level: 50 }, { name: 'Pikachu', level: 35 }]);
```

---

## `addCustomPokemon(name, type1, type2, stats)`
Add a new custom Pokémon to the game with defined types and stats.

### Usage:

```javascript
addCustomPokemon('CharizardX', 'Fire', 'Dragon', { health: 1000, attack: 200 });
```

---

## `changePokemonProperties(pokemonName, newProperties)`
Modify the properties of an existing Pokémon in the game.

### Usage:

```javascript
changePokemonProperties('Pikachu', { health: 500, attack: 150 });
```

---

## `changePlayerProfile(property, value)`
Change properties of the player’s profile, such as name or starter Pokémon.

### Usage:

```javascript
changePlayerProfile('name', 'Red');
```

---

## `setPlayerAttack(clickAttack, pokemonAttack)`
Set the player's click attack and Pokémon attack values.

### Usage:

```javascript
setPlayerAttack(10, 200);  // Sets click attack to 10 and Pokémon attack to 200
```

---

## `toggleElementVisibility(selector, show)`
Show or hide an element on the screen based on a CSS selector.

### Usage:

```javascript
toggleElementVisibility('.battle-container', false);  // Hides the battle container
```

---

## `getElementByXPath(xpath)`
Finds and returns the first element that matches an XPath query.

### Usage:

```javascript
const element = getElementByXPath('//*[@id="battleContainer"]/div/div[1]/div/h2[1]');
```

---

## `AddElement(tag, parentElement = document.body)`
Creates a new HTML element and appends it to the specified parent element (defaults to the document body).

### Usage:

```javascript
const myButton = AddElement('button', document.body);
```

---

## `getProperty(element, property)`
Gets a specific property of an HTML element.

### Usage:

```javascript
const value = getProperty(myButton, 'textContent');
```

---

## `setProperty(element, property, value)`
Sets a property of an HTML element.

### Usage:

```javascript
setProperty(myButton, 'textContent', 'Click me');
```

---

## **Example: Adding a Button to the Pokémon Name Bar**

This example demonstrates how to add a custom button to the Pokémon name bar. When clicked, it alerts the name of the enemy Pokémon currently in battle.

```javascript
// XPath to find the target element
const parentElement = getElementByXPath('//*[@id="battleContainer"]/div/div[1]/div/h2[1]');

// Create the button and add it under the located element
if (parentElement) {
    const myButton = AddElement('button', parentElement); // Create the button and add it to the located element

    // Use setProperty to add text and a click function
    setProperty(myButton, "textContent", "Click me");
    setProperty(myButton, "onclick", function() {
        alert(Battle.enemyPokemon()?.name);
    });

    // Optional: Set other properties like id or class
    setProperty(myButton, "id", "myButtonId");
    setProperty(myButton, "className", "myButtonClass");
} else {
    console.error("Element not found using the provided XPath.");
}
```

---

With these functions, developers can easily mod the game and add custom functionality like creating battles, modifying Pokémon, and manipulating the UI.
