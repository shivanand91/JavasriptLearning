// constructor = special method for difining the 
//                properties and methods of Object


// const car1 ={
//     make: "Ford",
//     model: "Mustang",
//     year: 2024,
//     color: "red",
//     drive: function() {console.log(`You drive the ${this.model}`)},
// }
// const car2 ={
//     make: "Ford",
//     model: "Mustang",
//     year: 2024,
//     color: "red",
//     drive: function() {console.log(`You drive the ${this.model}`)},
// }
// const car3 ={
//     make: "Ford",
//     model: "Mustang",
//     year: 2024,
//     color: "red",
//     drive: function() {console.log(`You drive the ${this.model}`)},
// }


function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.drive = function() {console.log(`you drive the ${model}`);}
}

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Tesla", "S20", 2024, "black");
const car3 = new Car("dodge", "Charger", 2026, "silver");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);

car1.drive();
car2.drive();
car3.drive();