import { Alternative } from './alternative';

export class Question {
  _id: string;
  title: string;
  alternatives: Alternative[];
  answerType: string;
  subject: string;
  order: number;
}
