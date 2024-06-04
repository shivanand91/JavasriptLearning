// object = a collection of ralated properties and/or methods 
//           can represent real world objects (people, products, places)
//           object = {key:CSSMathValue,
//                     function()}

const person1 = {

    firstName: "Shivanad",
    lastName: "Kumar",
    age: 19,
    isEmployed: true,
    sayHello: function(){console.log("Hi! Abhishek");},
    eat: () => console.log("Hey i am eatin pizza"),
}

const person2 = {
    
    firstName: "Abhishek",
    lastName: "Kumar",
    age: 19,
    isEmployed: true,
    sayHello: () => console.log("Hi! Shivanand"),
    eat: () => console.log("Hey i am eatin burger"),
}


console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.eat();

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.eat();