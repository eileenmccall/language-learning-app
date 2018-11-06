import { Exercise } from './exercise';

export class StudySession {
    id: number;
    startedOn: Date;
    endedOn: Date;
    completed: boolean;
    exercises: Array<Exercise>;
}