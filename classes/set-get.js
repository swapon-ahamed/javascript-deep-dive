/**
 * Prevent mutation, we can use getter and setter
 */

class Product{
    constructor( name, price, discountable ){
        this.name = name;
        this._price = price;
        this.discountable = discountable;
    }

    get price(){
        return this._price;
    }

    set price(price){
        if(typeof price !== 'number'){
            return this._price
        }else {
            this._price = price;
        }
    }
}

const product1 = new Product('burger', 110, false);
product1.price = 80;
console.log(product1.price);

const product2 = new Product('pizza', 800, false);
product2.price = "dsfsdlf";
console.log(product2.price);