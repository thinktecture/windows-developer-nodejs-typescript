import restify = require('restify');
import {productController} from './productController';

export class Server {
    private server: restify.Server;
    private port: number;

    constructor(port: number) {
        this.server = restify.createServer({
            name: 'Sample Server'
        });

        this.server.use(restify.bodyParser());

        this.port = port;
    }

    public start(): void {
        this.initializeControllers();
        this.server.listen(this.port, () => console.log(`Server is up and runnig on port ${this.port}`));
    }

    private initializeControllers(): void {
        productController.initialize(this.server);
    }
}
