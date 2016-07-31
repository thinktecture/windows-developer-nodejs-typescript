import restify = require('restify');
import {productController} from './productController';

export class Server {
    private _server: restify.Server;
    private _port: number;

    constructor(port: number) {
        this._server = restify.createServer({
            name: 'Sample Server'
        });

        this._server.use(restify.bodyParser());

        this._port = port;
    }

    public start(): void {
        this.initializeControllers();
        this._server.listen(this._port, () => console.log(`Server is up and runnig on port ${this._port}`));
    }

    private initializeControllers(): void {
        productController.initialize(this._server);
    }
}
