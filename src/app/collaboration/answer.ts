import { Question } from './../question/question';
import { Choise }   from './choise';

export class Answer{
  question: Question;
  choises: Choise[];
  typed: string;
}