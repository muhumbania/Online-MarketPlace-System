# Online-MarketPlace-System
An online market place implemented using JavaScript OOP concepts allowing buyers to add products on their cart, make purchases, allow sellers to manage their stock.
This project describes some key features of an oline market place system using JS OOP.

# Usage

TO use the features of the project, you first need to create a buyer and a seller objects :

```javascript
const buyer1 = new Buyer();
const seller1 = new Seller();
```
After creating the buyer and the seller objects, you need to add some products to the stock of the seller

```javascript
seller1.addToStock(nameOfTheProduct , quanityOfTheProduct , priceOfTheProduct);
```

The buyer can then add to his cart some products form a specific seller

```javascript
buyer1.addToCart(nameOfTheProduct , quanityOfTheProduct , seller1);
```

The buyer can make a purchase and empty his cart

```javascript
buyer1.purchase();
```

And finally, the buyer can make a review for the products purchased from a certain seller

```javascript
buyer1.review(seller1 , nbrOfStars , comment);

