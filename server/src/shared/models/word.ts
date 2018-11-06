import { WordForm } from './wordForm';

export class Word {
    id: number;
    baseForm: string; // Dictionary form of word
    forms: Array<WordForm>;
    exerciseIds: Array<number>;
    percentCorrect: number; // average of all related exercise percentages
}