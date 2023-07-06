const isAuth = true;
const user = {
    favorites: []
}

class Product{
    constructor( name, price ){
        this.name = name;
        this.price = price;
        this.favoriteProduct = this.favoriteProduct.bind(this);
    }

    handleFavorouteProduct(){
        if(isAuth){
            setTimeout(this.favoriteProduct, 1000);
            // setTimeout(this.favoriteProduct.bind(this), 1000);
            // this.favoriteProduct();
        }else{
            console.log('User is not authenticated')
        }
    }

    favoriteProduct(){
        user.favorites.push(this.name);
        console.log(`${this.name} is favorited`);
    }
}

const product1 = new Product('Burger', 99.99);

console.log(product1.handleFavorouteProduct());