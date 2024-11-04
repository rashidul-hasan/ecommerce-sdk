"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Products {
    constructor(sdk) {
        this.sdk = sdk;
    }
    getAllProducts() {
        return __awaiter(this, arguments, void 0, function* (options = {}) {
            console.log('got called getAllProducts');
            // return this.sdk.fetch('/products', options);
        });
    }
    getProductsByCategory(categoryId_1) {
        return __awaiter(this, arguments, void 0, function* (categoryId, options = {}) {
            return this.sdk.fetch(`/products/category/${categoryId}`, options);
        });
    }
    getProductsByCollection(collectionId_1) {
        return __awaiter(this, arguments, void 0, function* (collectionId, options = {}) {
            return this.sdk.fetch(`/products/collection/${collectionId}`, options);
        });
    }
    getProductDetails(productIdOrSlug_1) {
        return __awaiter(this, arguments, void 0, function* (productIdOrSlug, options = {}) {
            return this.sdk.fetch(`/products/${productIdOrSlug}`, options);
        });
    }
}
exports.default = Products;
