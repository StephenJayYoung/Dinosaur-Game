
    // Create Dino Constructor
    function dino(species, weight, height, diet, where, when, fact){
        this.diet = diet;
        this.weight =  weight;
        this.height = height;
        this.where = where;
        this.when = when;
        this.fact = fact;
    }

    // The above is the same as this:
    // class Dino {
    //     constructor(species, weight, height, diet, where, when, fact){
    //         this.species = species
    //         this.diet = diet;
    //         this.weight =  weight;
    //         this.height = height;
    //         this.where = where;
    //         this.when = when;
    //         this.fact = fact;
    //     }
    // }

    // Create Dino Objects
    const Triceratops = new dino ("Triceratops", 13000, 114, "herbavore");
    const Anklyosaurus = new dino();
    const Brachiosaurus = new dino()
    const Stegosaurus = new dino()
    const Elasmosaurus = new dino()
    const Pteranodon = new dino()
    const Pigeon = new dino()
    const TRex = new dino()


    // Create Human Object
    function human(name, feet, inches, weight, lbs, diet, ){
        this.name = name;
        this.feet = feet;
        this.feet = inches;
        this.weight = weight;
        this.lbs = lbs;
        this.diet = diet;
    }


    // Use IIFE to get human data from form

    const button = document.getElementById("btn");
    button.onclick = function(){
        let nameValue = document.getElementById("name").value;
        let heightFeet = document.getElementById("feet").value;
        let heightInches = document.getElementById("inches").value;
        let weight = document.getElementById("weight").value;
        let diet = document.getElementById("diet").value;
        console.log(`Name: ${nameValue}, feet: ${heightFeet}, inches: ${heightInches}, weight: ${weight} diet: ${diet}`);
    };






    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
