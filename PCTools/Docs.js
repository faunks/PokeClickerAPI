// Lets say if you want like to do it so every time you throw a pokeball it prints to the console "sup dude"
// you can use the merge function like this:

let x = function(){
  console.log("sup dude")
}
App.game.pokeballs.usePokeball = mergeFunctions(App.game.pokeballs.usePokeball,x)



// Add UI elements
// Lets say for example U want to make a button in the pokemon name bar that when you click alert the pokemon name for some reason
// u can do it with the addElement and setProperty functions like this:


// XPath to find the target element
const parentElement = getElementByXPath('//*[@id="battleContainer"]/div/div[1]/div/h2[1]');

// Create the button and add it under the located element
if (parentElement) {
    const myButton = AddElement("button", parentElement); // Create the button and add it to the located element

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
