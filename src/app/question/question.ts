import { Alternative } from './alternative';
import { Attribute }   from './attribute';

export class Question {
  _id: string;
  title: string;
  alternatives: Alternative[];
  attributes: Attribute[];
  answerType: string;
  subject: string;
  order: number;
}
