/*function Animal(name){
    this.name = name;
}

Animal.prototype.action = function(){
  document.getElementById(this.actionSoundName).play();
  
}

Animal.prototype.putInTheDocument = function(){
    var petsTable = document.getElementById("petsTable");
    var petTR = document.createElement("tr");
  
    var petNameTD = document.createElement("td");
    petNameTD.textContent = this.name;
    petTR.appendChild(petNameTD);
  
    var petLegsTD = document.createElement("td");
    petLegsTD.textContent = this.legs;
    petTR.appendChild(petLegsTD);
  
    var petActionTD = document.createElement("td");
    var petActionTDButton = document.createElement("button");
    petActionTDButton.textContent = this.actionText;
    petActionTD.appendChild(petActionTDButton);
    petTR.appendChild(petActionTD);
    
    petActionTDButton.onclick = this.action.bind(this);
    petsTable.querySelector("tbody").appendChild(petTR)
}


function Cat(name){
    Animal.call(this, name);
    this.legs = 4;
    this.actionText = "Meoow"
    this.actionSoundName = "meow"
}

Cat.prototype = Animal.prototype;

function Monkey(name){
    Animal.call(this, name);
    this.legs = 2;
    this.actionText = "Scream";
    this.actionSoundName = "scream";
}

Monkey.prototype = Animal.prototype;

var Mila = new Cat("Mila");
Mila.putInTheDocument();

var Charlie = new Monkey("Charlie");
Charlie.putInTheDocument();
*/
class Animal {
    constructor(name){
        this.name = name;
    }
    action(){
        document.getElementById(this.actionSoundName).play();
    }
    
    imgAction(){

        var imgDoc = document.querySelector("img");
        imgDoc.src = this.link;
    }
    
   
    putInTheDocument() {
        var petsTable = document.getElementById("petsTable");
        var petsTR    = document.createElement("tr");
        
        var petNameTD = document.createElement("td");
        petNameTD.textContent = this.name;
        petsTR.appendChild(petNameTD);

        var petLegsTD = document.createElement("td");
        petLegsTD.textContent = this.legs;
        petsTR.appendChild(petLegsTD);


        //mouse eventlerini de buraya koyabiliriz
        petsTR.addEventListener("mouseover",function(){
            petsTR.style.backgroundColor = "#00FF00";
            petNameTD.style.color = '#FFFFFF';
            petLegsTD.style.color = '#FFFFFF';
        });
        petsTR.addEventListener("mouseleave",function(){
            petsTR.style.backgroundColor = '#FFFFFF';
            petNameTD.style.color = '#000000';
            petLegsTD.style.color = '#000000';
        });


        //burada buton olusturma kismi
        var petActionTD = document.createElement("td");
        var petActionTDButton = document.createElement("button");
        petActionTDButton.textContent = this.actionText;
        petActionTD.appendChild(petActionTDButton);
        petsTR.appendChild(petActionTD);
        
        //click eventi burada
        petsTR.onclick = this.imgAction.bind(this);
        petActionTDButton.onclick = this.action.bind(this);

        petsTable.querySelector("tbody").appendChild(petsTR);


    }
}
class Cat extends Animal {
    constructor(name){
        super(name);
        this.legs = 4;
        this.actionText = "Meow";
        this.actionSoundName = "meow";
        this.link = "/Users/zahitacar/Desktop/JavaScriptv.1/kitties.jpg";
    }
}
class Monkey extends Animal {
    constructor(name){
        super(name);
        this.legs = 2;
        this.actionText = "Scream";
        this.actionSoundName = "scream";
        this.link = "/Users/zahitacar/Desktop/JavaScriptv.1/charlieMonkey.jpg"
    }

}

const Mila = new Cat("Mila");
Mila.putInTheDocument();

const Charlie = new Monkey("Charlie");
Charlie.putInTheDocument();
