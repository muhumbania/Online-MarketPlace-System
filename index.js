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
        this.purchased = [];
    }

    addToCart(product , quantity){

        this.cart.products.push({
            productName : product.name,
            quantity : quantity
        });

        this.cart.price += product.price * quantity; 

    }

    purchase(){

        if(this.cart.length !== 0){
            this.purchased.push(new Purchase(this));
            this.cart = [];
        } else{
            console.log('Add products to you cart before any purchase');
        }
    }
}

class Seller{

    constructor(){
        super('Benit', 'benit@gmail.com');
        console.log("A new seller is created");
        this.stock = new Cart();
    }

    // addToStock(name , quantity , price){

    // }
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

    constructor(user){
        this.user = user;
        this.date = new Date();

        console.log(`Congratulations ${user.name} you just purchased ${user.cart} for the total of ${user.cart.price} at ${this.date}`);
    }
}

class Review{
}

product1 = new Product('Iphone12' , 10 , 500);
product2 = new Product('Airpod', 10 , 30)
buyer1 = new Buyer();

buyer1.addToCart(product1 , 3);
buyer1.addToCart(product1 , 5);
buyer1.addToCart(product2 , 12);

// console.log(product1, '\n');
console.log(buyer1.cart);

buyer1.purchase();

console.log(buyer1.cart);

buyer1.purchase();

