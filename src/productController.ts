import {Product, productService} from './productService';
import {Request, Server, Response} from 'restify';

class ProductController {
    public initialize(server: Server): void {
        server.get('/products', this.listProducts.bind(this));
        server.post('/products', this.addProduct.bind(this));
    }

    private listProducts(req: Request, res: Response): void {
        res.json(200, productService.list());
    }

    private addProduct(req: Request, res: Response): void {
        const product = new Product(req.body.name, req.body.price);
        productService.add(product);

        res.send(200);
    }
}

export const productController = new ProductController();
