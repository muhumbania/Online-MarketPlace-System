class User{

    constructor(name, email){
        this.name = name;
        this.email = email;
    }

}

class Buyer extends User{

    constructor(){
        console.log("A new buyer is created");
    }

    addToCart(product , quantity){

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
        this.product = [];
        this.price = 0;
    }

}

class Purchase{

}

class Review{

}

