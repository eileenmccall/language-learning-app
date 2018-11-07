import { Request, Response } from 'express';
import { WordController } from './controllers/word';

export class RouteProvider {
    private wordController: WordController = new WordController();
    public routes (app): void {

        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'api works'
                })
            });
        app.route('word')
            .post(this.wordController.create);
    }
}
