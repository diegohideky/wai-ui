import { Injectable }    from '@angular/core';
import { Collaboration } from './collaboration';

import { ApiService }    from '../api/api.service';

@Injectable()
export class CollaborationService {

  constructor(
    private apiService: ApiService
  ) { }

  subjects(): Array<string> {
    return ['STUDENT', 'CITY', 'COLLEGE'];
  }

  findAllQuestions(): Promise<any> {
    return this.apiService.findQuestions();
  }

  insert(collaboration: Collaboration): Promise<any> {
    const params = {
      collaborator: collaboration.collaborator,
      answers: collaboration.answers
    };
    return this.apiService.insertCollaboration(params);
  }

  update(collaboration: Collaboration): Promise<any> {
    const params = {
      _id: collaboration._id,
      collaborator: collaboration.collaborator,
      answers: collaboration.answers
    };
    return this.apiService.updateCollaboration(params);
  }

  remove(collaboration: Collaboration): Promise<any> {
    const params = {
      _id: collaboration._id
    }
    return this.apiService.removeCollaboration(params);
  }

}