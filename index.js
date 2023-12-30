class User{

    constructor(name, email){
        this.name = name;
        this.email = email;
    }

}

class Buyer extends User{

    constructor(){
        super('Franklin', 'franklin@gmail.com');
        console.log("A new buyer is created");
        this.cart = new Cart();
    }

    addToCart(product , quantity){

        this.cart.products.push({
            productName : product.name,
            quantity : quantity
        });

        this.cart.price += product.price * quantity; 

    }

    purchase(){

    }


}

class Seller{
}

class Product{

    constructor(name , quantity , price){
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }

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

product1 = new Product('Iphone12' , 10 , 500);
buyer1 = new Buyer();

buyer1.addToCart(product1 , 3);
buyer1.addToCart(product1, 5);

// console.log(product1, '\n');
console.log(buyer1.cart);

