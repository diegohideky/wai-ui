import { Answer } from './answer';

export class Collaboration {
  _id: string;
  collaborator: string;
  school: string;
  answers: Answer[];
}