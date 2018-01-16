import { Injectable } from '@angular/core';
import { Question }     from './question';

import { ApiService } from '../api/api.service';

@Injectable()
export class QuestionService {

  constructor(
    private apiService: ApiService
  ) { }

  findAll(): Promise<any> {
    return this.apiService.findQuestions();
  }

  insert(question: Question): Promise<any> {
    const params = {
      title: question.title,
      alternatives: question.alternatives,
      attributes: question.attributes,
      answerType: question.answerType,
      subject: question.subject,
      order: question.order
    };
    return this.apiService.insertQuestion(params);
  }

  update(question: Question): Promise<any> {
    const params = {
      _id: question._id,
      title: question.title,
      alternatives: question.alternatives,
      attributes: question.attributes,
      answerType: question.answerType,
      subject: question.subject
    };
    return this.apiService.updateQuestion(params);
  }

  remove(question: Question): Promise<any> {
    const params = {
      _id: question._id
    }
    return this.apiService.removeQuestion(params);
  }

}
