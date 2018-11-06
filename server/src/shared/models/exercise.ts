export class Exercise {
    id: number;
    exerciseTypeId: number; // identifies exercise type
    wordsIds: Array<number> | null; // ids of words used in exercise
    percentCorrect: number; // 0.88
    timesMissed: number;
    leech: boolean;
}