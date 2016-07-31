export class Product {
    constructor(public name: string, public price: number) {
        if (!name || !name.trim()) {
            throw new Error('Parameter name not set.');
        }

        if (!price) {
            throw new Error('Price not set.');
        }
    }
}

class ProductService {
    private _products: Array<Product> = [];

    public list(): Array<Product> {
        return this._products;
    }

    public add(product: Product): void {
        if (!product) {
            throw new Error('Parameter product is not set.');
        }

        this._products.push(product);
    }
}

export const productService = new ProductService();
