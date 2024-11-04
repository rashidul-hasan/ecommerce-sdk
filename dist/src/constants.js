"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchTags = exports.ENDPOINTS = void 0;
exports.ENDPOINTS = {
    //products
    products: {
        all: 'products',
    },
    category: {
        all: 'categories'
    },
    settings: {
        all: 'home/settings'
    }
};
exports.fetchTags = {
    settings: 'settings',
    single_blog: 'single_blog',
    home_data: 'home_data',
    all_categories: 'all_categories',
};
