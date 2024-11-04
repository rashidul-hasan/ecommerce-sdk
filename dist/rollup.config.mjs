"use strict";
// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import pkg from './package.json';
import json from '@rollup/plugin-json';
export default [
    // CommonJS (for Node) and ES module (for bundlers) build
    {
        input: 'src/index.js',
        output: [
            { file: pkg.main, format: 'cjs' },
            { file: pkg.module, format: 'es' }
        ],
        plugins: [
            json(),
            babel({
                babelHelpers: 'bundled',
                exclude: ['node_modules/**']
            })
        ]
    },
    // Browser-friendly UMD build
    {
        input: 'src/index.js',
        output: {
            name: 'ECommerceSDK',
            file: pkg.browser,
            format: 'umd'
        },
        plugins: [
            resolve(),
            commonjs(),
            babel({
                babelHelpers: 'bundled',
                exclude: ['node_modules/**']
            }),
            json(),
            terser()
        ]
    }
];
