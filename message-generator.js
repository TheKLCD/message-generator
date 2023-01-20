//Store the different components of the message in 3 different arrays
let types = ["Error", "Warning", "Fun Fact"];
let subjects = ["Water", "Penguins", "Time"];
let substance = ["NEARING THE END", "hating potatoes", "now not liking you, you in particular. Yes the person reading this, you"];

//A method to quickly get a random number from 0 <= random < n
function getRandom(n){
    return Math.floor(Math.random()*n);
}

//Format and output a string randomly combined from the components
console.log(`${types[getRandom(3)]}: ${subjects[getRandom(3)]} is ${substance[getRandom(3)]}`);