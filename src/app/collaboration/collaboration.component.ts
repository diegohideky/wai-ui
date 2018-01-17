import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';

import { CollaborationService } from './collaboration.service';
import { Question } from '../question/question';
import { Collaboration } from './collaboration';
import { Answer } from './answer';
import { Alternative } from '../question/alternative';

@Component({
  selector: 'app-collaboration',
  templateUrl: './collaboration.component.html',
  styleUrls: ['./collaboration.component.css']
})
export class CollaborationComponent implements OnInit {

  private collaboration: Collaboration;
  private answer: Answer;
  private answers: Answer[];
  private question: Question;
  private questions: Question[];
  private subjects: Array<string>;
  private index: number;
  private selectedSubject: string;

  constructor(
    private router: Router,
    private collaborationService: CollaborationService
  ) { }

  nextForm(): void {
    this.index++;
    this.selectedSubject = this.subjects[this.index];
  }

  previousForm(): void {
    this.index--;
    this.selectedSubject = this.subjects[this.index];
  }

  selectSingle(answer: Answer, alternative: Alternative): void {
    answer.choises[0] = {
      text: alternative.text,
      value: alternative.value,
      complement: ''
    };
  }

  selectMultiple(answer: Answer, alternative: Alternative): void {
    let found; 
    answer.choises.forEach(choise => {
      if (choise.text === alternative.text) found = choise;
    });

    if (!found) {
      answer.choises.push({
        text: alternative.text,
        value: alternative.value,
        complement: ''
      });
    } else {
      let index = answer.choises.indexOf(found);
      answer.choises.splice(index, 1);
    }
  }

  submitForm(): void {
    this.collaborationService.insert(this.collaboration)
      .then(res => {
        if (res.status === 200) {
          console.log('Colaboração salva com sucesso!');

          this.index = 0;
          this.selectedSubject = this.subjects[this.index];

          this.collaboration = new Collaboration;
          this.answer = new Answer;
          this.answers = [];
          this.collaboration.answers = [];

          this.questions.forEach(question => {
            this.answer = {
              question: question,
              choises: [],
              typed: ''
            };

            this.answers.push(this.answer);
          });

          this.collaboration.answers = this.answers;
        } else {
          console.log('Houve algum erro ao salvar colaboração');
        }
      }); 
  }

  ngOnInit() {
    this.subjects = this.collaborationService.subjects();
    this.index = 0;
    this.selectedSubject = this.subjects[this.index];

    this.collaboration = new Collaboration;
    this.answer = new Answer;
    this.answers = [];
    this.collaboration.answers = [];
    
    this.collaborationService.findAllQuestions()
      .then(res => {
        if (res.status === 200) {
          let data = res.json();
          this.questions = data.questions;

          this.questions.forEach(question => {
            this.answer = {
              question: question,
              choises: [],
              typed: ''
            };

            this.answers.push(this.answer);
          });

          this.collaboration.answers = this.answers;
        } else {
          console.log('houve um erro ao carregar perguntas');
        }
      });
  }

}
