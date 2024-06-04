// class = (ES6 feature) provides a more sructured and cleaner way to 
//         work with objects compared to traditional constructor function 
//         ex, - static keyword, encapsulationm inheritance

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){

        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price}`);
    }

    calculatedTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const products1 = new Product("Shirt", 350);
const products2 = new Product("T-Shirt", 150);

products1.displayProduct();
products2.displayProduct();


const shirtTotal = products1.calculatedTotal(0.05);
const TshirtTotal = products2.calculatedTotal(0.05);
console.log(shirtTotal);
console.log(TshirtTotal);