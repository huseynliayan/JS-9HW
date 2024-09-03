// class Animal{
//     constructor(name,kind){
//         this.name = name;
//         this.kind = kind;
//     }
//     sayVoice(){
//     console.log(this.name)
//     }
//     changeKind(newKind){
//         this.kind = newKind;
//     }
// }

// const animal = new Animal("Rock", "Dog");
// const animal1= new Animal("Jessy", "bear");
// console.log(animal)
// console.log(animal1)
// animal.changeKind("Cat")
// console.log(animal)
// animal1.sayVoice();


//prototype
function Animal(name,kind){
    this.name = name;
    this.kind = kind;
}

Animal.prototype.sayVoice = function(){
    console.log(this.name)
}

Animal.prototype.changeKind = function(newKind){
    this.kind = newKind
}

let animal = new Animal("Rock","Dog");
console.log(animal);
animal.changeKind("wolf")
console.log(animal);
animal.sayVoice()