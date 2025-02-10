class SuperHero{
    constructor(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
} 
// export an instance of the class super-hero
module.exports = SuperHero;