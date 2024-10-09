class Products {
  constructor(sdk) {
    this.sdk = sdk;
  }

  async getAllProducts(options = {}) {
    return this.sdk.fetch('/products', options);
  }

  async getProductsByCategory(categoryId, options = {}) {
    return this.sdk.fetch(`/products/category/${categoryId}`, options);
  }

  async getProductsByCollection(collectionId, options = {}) {
    return this.sdk.fetch(`/products/collection/${collectionId}`, options);
  }

  async getProductDetails(productIdOrSlug, options = {}) {
    return this.sdk.fetch(`/products/${productIdOrSlug}`, options);
  }
}

export default Products;
