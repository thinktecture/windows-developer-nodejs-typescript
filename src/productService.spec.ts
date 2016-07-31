import chai = require('chai');
const assert = chai.assert;

import {Product, productService, ProductService} from './productService';

describe('ProductService', () => {
    it('exports an object', () => {
        assert.isObject(productService);
    });

    it('exports a ProductService class', () => {
        assert.isFunction(ProductService);
    });

    it('exports a Product class', () => {
        assert.isFunction(Product);
    });

    describe('instance', () => {
        it('can be constructed', () => {
            const sut = () => new ProductService();

            assert.doesNotThrow(sut);
        });

        it('product list is empty per default', () => {
            const sut = new ProductService();
            const result = sut.list();

            assert.isArray(result);
            assert.strictEqual(result.length, 0);
        });

        it('can add a product', () => {
            const product = new Product('test', 100);
            const sut = new ProductService();

            sut.add(product);

            const result = sut.list();

            assert.isArray(result);
            assert.strictEqual(result.length, 1);

            const p = result[0];

            assert.strictEqual(p.name, 'test');
            assert.strictEqual(p.price, 100);
        });

        it('can not add a null product', () => {
            const sut = new ProductService();
            const action = () => sut.add(null);

            assert.throws(action);
        });
    });
});
