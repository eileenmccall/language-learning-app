import { Request, Response } from 'express';

export class RouteProvider {
    public routes (app): void {
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                })
            })  
    }
}
