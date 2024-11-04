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
class Cart {
    constructor(sdk) {
        this.sdk = sdk;
    }
    addToCart(productId_1) {
        return __awaiter(this, arguments, void 0, function* (productId, quantity = 1) {
            return this.sdk.fetch('/cart/add', {
                method: 'POST',
                body: JSON.stringify({ productId, quantity }),
            });
        });
    }
}
exports.default = Cart;
