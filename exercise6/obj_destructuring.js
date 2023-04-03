'use strict';

// create obj
const artist = {
    name1: " Taylor Swift",
    song1: "Enchanted",
    song2: "Blank space",
    song3: "love story",
}

// obj destructuring 
let { name1, song1 } = artist;
console.log(name1);
console.log(song1);

// we cannot destructure with random variable name -> undefined
let { var1, var2 } = artist;
console.log(var1);
console.log(var2);

//in this way we can change variable names in case of objects
let { name1: vari1, song1: vari2 } = artist;
console.log(vari1);
console.log(vari2);
// by default variable names are key names

// remaining elements can be destructured with their key names
let { song2, song3 } = artist;
console.log(song2);
console.log(song3);

//--------------------------------- XXXXXXXXXXXXXXXXXXXXXXXXXXXX -----------------------------------

// another example
const artist2 = {
    name12: " BTS",
    song12: "Dope",
    song2: "Dynamite",
    song3: "Fire",
    song4: "DNA",
}

const { name12, song12, ...rest } = artist2;
console.log(name12);
console.log(song12);
console.log(rest);

// -------------------------------------------  END  -----------------------------------------------
// object destructuring