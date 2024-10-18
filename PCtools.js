function mergeFunctions(...functions) {
    return function(...args) {
        for (let func of functions) {
            func.apply(this, args);
        }
    };
}
// This script got some tools for modding the game
// Made by faunks AKA faunksys🔥
