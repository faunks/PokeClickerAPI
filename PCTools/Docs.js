// Lets say if you want like to do it so every time you throw a pokeball it prints to the console "sup dude"
// you can use the merge function like this:

let x = function(){
  console.log("sup dude")
}
App.game.pokeballs.usePokeball = mergeFunctions(App.game.pokeballs.usePokeball,x)
