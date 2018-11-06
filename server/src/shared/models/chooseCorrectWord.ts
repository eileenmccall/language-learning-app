import { Exercise} from './exercise';
import { Word } from './Word';

export class ChooseCorrectWord extends Exercise {
    text: string; // Je {{ mange }} une pomme
    options: Array<Word>; // [ 'manger', 'boire' ]
}