class Cart {
  constructor(sdk) {
    this.sdk = sdk;
  }

  async addToCart(productId, quantity = 1) {
    return this.sdk.fetch('/cart/add', {
      method: 'POST',
      body: JSON.stringify({ productId, quantity }),
    });
  }

  // ... other methods remain the same
}

export default Cart;
