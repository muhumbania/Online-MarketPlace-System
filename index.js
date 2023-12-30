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

    addToCart(name , quantity , seller){

        const productToAdd = seller.stock.filter(stock => stock.name === name)[0];

        if(productToAdd.quantity > quantity){
            this.cart.products.push({
                productName : name,
                quantity : quantity
            });
    
            this.cart.price += productToAdd.price * quantity;

            seller.stock[seller.stock.indexOf(productToAdd)].quantity -= quantity;

        } else{
            console.log("Your seller doesnt have enough quantity, look for another");
        }

        

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

class Seller extends User{

    constructor(){
        super('Benit', 'benit@gmail.com');
        console.log("A new seller is created");
        this.stock = [];
    }

    addToStock(name , quantity , price){
        this.stock.push(new Product(name , quantity , price));
    }
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

// product1 = new Product('Iphone12' , 10 , 500);
// product2 = new Product('Airpod', 10 , 30)
// buyer1 = new Buyer();

// buyer1.addToCart(product1 , 3);
// buyer1.addToCart(product1 , 5);
// buyer1.addToCart(product2 , 12);

// // console.log(product1, '\n');
// console.log(buyer1.cart);

// buyer1.purchase();

// console.log(buyer1.cart);

// buyer1.purchase();


const seller1 = new Seller();
seller1.addToStock('Pixel5' , 8 , 300);
seller1.addToStock('Pixel3' , 7 , 100);
seller1.addToStock('Pixel4' , 5 , 250);
seller1.addToStock('Iphone15' , 10 , 1000);

console.log(seller1.stock);

const buyer1 = new Buyer();
buyer1.addToCart('Pixel5' , 5 , seller1);

console.log('Buyer1 Cart: ' , buyer1.cart);
console.log('Seller1 Stock:' , seller1.stock);

