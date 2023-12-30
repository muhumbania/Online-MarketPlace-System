class User{

    constructor(name, email){
        this.name = name;
        this.email = email;
    }

}

class Buyer extends User{

    constructor(){
        console.log("A new buyer is created");
        this.cart = new Cart();
    }

    addToCart(productName , quantity){

        this.cart.products.push({
            productName : productName,
            quantity : quantity
        });

        // this.cart.price += 

    }

    purchase(){

    }


}

class Seller{
}

class Product{
}

class Cart{

    constructor(){
        this.products = [];
        this.price = 0;
    }

}

class Purchase{
}

class Review{
}

