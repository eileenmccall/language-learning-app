import * as express from 'express';
import * as bodyParser from 'body-parser';
import { RouteProvider } from './api/routes';

class App {
    public app: express.Application;
    public routeProvider: RouteProvider = new RouteProvider();

    constructor () {
        this.app = express();
        this.config();
        this.routeProvider.routes(this.app);
    }

    private config (): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;