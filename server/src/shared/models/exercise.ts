export class Exercise {
    id: number;
    exerciseTypeId: number; // identifies exercise type
    wordsIds: Array<number> | null; // ids of words used in exercise
    percentCorrect: number; // 0.88
    timesMissed: number;
    leech: boolean;
    revisionAdjustment: number; // percentage by which to modify revision algorithm, based on time taken to answer and times missed
}