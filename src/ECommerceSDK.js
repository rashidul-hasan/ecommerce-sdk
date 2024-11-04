import Cart from './Cart.js';
import Products from './Products.js';
import Settings from './Settings.js';

class ECommerceSDK {
  constructor() {
    this.apiUrl = null;
    this.secretKey = null;
    this.cart = null;
    this.products = null;
    this.settings = null;
    this.isServer = typeof window === 'undefined';
  }

  init(apiUrl, secretKey) {
    if (!apiUrl || !secretKey) {
      throw new Error('API URL and secret key are required');
    }
    this.apiUrl = apiUrl;
    this.secretKey = secretKey;
    this.cart = new Cart(this);
    this.products = new Products(this);
    this.settings = new Settings(this);
  }

  getHeaders() {
    return {
      'Authorization': `Bearer ${this.secretKey}`,
      'Content-Type': 'application/json',
    };
  }

  async fetch(endpoint, options = {}, nextOptions = {}) {
    if (!this.apiUrl || !this.secretKey) {
      throw new Error('SDK not initialized. Call init() first.');
    }

    const url = `${this.apiUrl}/${endpoint}`;
    const headers = this.getHeaders();

    console.log({url})
    
    let fetchOptions = {
      ...options,
      headers: { ...headers, ...options.headers },
      next: nextOptions
    };

    // If we're on the server and the method is GET, we can use Next.js cache
    if (this.isServer && (!options.method || options.method === 'GET')) {
      fetchOptions = {
        ...fetchOptions,
        next: nextOptions
      };
    }

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  }
}

export default ECommerceSDK;


