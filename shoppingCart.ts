type products = {
    name: string;
    price: number;
  };
  
  type cartItem = {
    product: products;
    quantity: number;
  };
  
  class ShoppingCart {
    private items: cartItem[];
  
    constructor(items: cartItem[] = []) {
      this.items = items;
    }
  
    addItem = (product: products, quantity: number) => {
      let existingItem: any;
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].product.name === product.name) {
          existingItem = this.items[i];
          break;
        }
      }
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.items.push({ product, quantity });
      }
    };
  
    removeItem = (productName: string) => {
      const updatedItems = this.items.filter(
        (item) => item.product.name !== productName
      );
      this.items = updatedItems;
    };
  
    updateItemQuantity = (productName: string, quantity: number) => {
      let found = false;
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].product.name === productName) {
          this.items[i].quantity = quantity;
          found = true;
          break;
        }
      }
      if (!found) {
        console.log(`Sorry! ${productName} not found in cart.`);
      }
    };
  
    getItems = (): cartItem[] => {
      return this.items;
    };
  
    getTotalPrice = (): number => {
      let totalPrice = 0;
      for (let i = 0; i < this.items.length; i++) {
        totalPrice += this.items[i].product.price * this.items[i].quantity;
      }
      return totalPrice;
    };
  
    emptyCart = () => {
      this.items = [];
    };
  
    searchProductByName = (name: string): products[] => {
      const matchingProducts: products[] = [];
      for (let i = 0; i < this.items.length; i++) {
        if (
          this.items[i].product.name.toLowerCase().includes(name.toLowerCase())
        ) {
          matchingProducts.push(this.items[i].product);
        }
      }
      return matchingProducts;
    };
  }
  
  const cart = new ShoppingCart();
  const teaPowder: products = { name: "Tea Powder", price: 10 };
  const sugar: products = { name: "Sugar", price: 5 };
  const milk: products = { name: "Milk", price: 20 };
  
  cart.addItem(teaPowder, 2);
  cart.addItem(sugar, 1);
  cart.addItem(milk, 1);
  
  console.log(cart.getItems());
  
  cart.removeItem("Sugar");
  console.log(cart.getItems());
  
  cart.updateItemQuantity("Tea Powder", 3);
  console.log(cart.getItems());
  
  cart.updateItemQuantity("Coffee Powder", 3);
  
  console.log(cart.searchProductByName("tea"));
  
  console.log(cart.getTotalPrice());
  
  cart.emptyCart();
  console.log(cart.getItems());
  
  