const SuperHero = require("./super-hero");

const Batman = new SuperHero("Batman");
console.log(Batman.getName());
Batman.setName("Bruce Wayne");
console.log(Batman.getName());

const superman = new SuperHero("Superman");
console.log(superman.getName());
