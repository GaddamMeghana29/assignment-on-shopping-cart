# Shopping Cart

## Brief Description
This is a TypeScript class that represents a shopping cart. It allows users to add, remove, and update items in the cart, search for products by name, get the total price of the items in the cart, and empty the cart.

## Table of Contents
<br>Installation
<br>Usage
<br>Contributing

### Installation
To use this shopping cart class in a project, please follow these steps:

<br>1. Install TypeScript in your project if you don't have it.
<br>2. Copy the ShoppingCart class from the code above and paste it into a TypeScript file in the project.
<br>3. Use the ShoppingCart class in the code as needed.

### Usage
To use the ShoppingCart class, create a new instance of it and call it's methods as needed.
```
const cart = new ShoppingCart();
```
To add items to the cart,use the `addItem` method is used. 
```
cart.addItem(teaPowder, 2);
cart.addItem(sugar, 1);
cart.addItem(milk, 1);
```
To get the items currently in the cart, `getItems` method is used.

```
console.log(cart.getItems());
```
To remove an item from the cart, the method `removeItem` is used.
```
cart.removeItem("Sugar");
```
To update the quantity of an item in the cart, the method `updateItemQuantity` is used.
```
cart.updateItemQuantity("Tea Powder", 3);
```
To search for products by name in the cart, the method `searchProductByName` is used. 
```
console.log(cart.searchProductByName("Tea"));
```
To get the total price of all items in the cart, `getTotalPrice` method is used. 
```
console.log(cart.getTotalPrice());
```
To empty the cart, the method `emptyCart` is used.
```
cart.emptyCart();
```

### Contributing
If you would like to contribute to this project, please fork the repository and create a pull request with the changes. 









