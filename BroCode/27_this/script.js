// this = refernce to the object where this is used
//       (the object depends on the immediate context)
//       person.name = this.name


// (((((((((((Note => this keyword does not work with arrow function)))))))))

// <<<------------------------------------------------------------------------------>>>
            //  Acces all the value of object person1 and person2 
// <<<------------------------------------------------------------------------------>>>

const person1 = {
    
    firstName: "Shivanand",
    lastName: "Kumar",
    age: 30,
    isEmployed: true,
    food: "pizza",
    sayHello: function() {console.log(`Hi! i am ${this.firstName}`)},
    eat: function() {console.log(`Hi! i am eating ${person1.food}`)},
}

const person2 = {
    
    firstName: "Abhishek",
    lastName: "Kumar",
    age: 30,
    isEmployed: true,
    food: "burger",
    sayHello: function() {console.log(`Hi! i am ${this.firstName}`)},
    eat: function() {console.log(`Hi! i am eating ${person2.food}`)},
}

person1.sayHello();
person2.sayHello();
person1.eat();
person2.eat();

// <<<------------------------------------------------------------------------------>>>

