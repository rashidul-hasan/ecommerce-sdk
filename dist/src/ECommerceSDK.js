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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cart_js_1 = __importDefault(require("./Cart.js"));
const Products_js_1 = __importDefault(require("./Products.js"));
const Settings_js_1 = __importDefault(require("./Settings.js"));
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
        this.cart = new Cart_js_1.default(this);
        this.products = new Products_js_1.default(this);
        this.settings = new Settings_js_1.default(this);
    }
    getHeaders() {
        return {
            'Authorization': `Bearer ${this.secretKey}`,
            'Content-Type': 'application/json',
        };
    }
    fetch(endpoint_1) {
        return __awaiter(this, arguments, void 0, function* (endpoint, options = {}, nextOptions = {}) {
            if (!this.apiUrl || !this.secretKey) {
                throw new Error('SDK not initialized. Call init() first.');
            }
            const url = `${this.apiUrl}/${endpoint}`;
            const headers = this.getHeaders();
            console.log({ url });
            let fetchOptions = Object.assign(Object.assign({}, options), { headers: Object.assign(Object.assign({}, headers), options.headers), next: nextOptions });
            // If we're on the server and the method is GET, we can use Next.js cache
            if (this.isServer && (!options.method || options.method === 'GET')) {
                fetchOptions = Object.assign(Object.assign({}, fetchOptions), { next: nextOptions });
            }
            const response = yield fetch(url, fetchOptions);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return yield response.json();
        });
    }
}
exports.default = ECommerceSDK;
