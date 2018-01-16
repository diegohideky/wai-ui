import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Question }          from './question';
import { Alternative }       from './alternative';
import { Attribute }         from './attribute';

import { QuestionService }   from './question.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  private question: Question;
  private questions: Question[];
  private alternative: Alternative;
  private alternatives: Alternative[];
  private attribute: Attribute;
  private attributes: Attribute[];
  private message: string;

  constructor(
    private questionService: QuestionService,
    private router: Router
  ) { }

  submitForm(): void {
    if (!this.question.hasOwnProperty('_id')) {
      this.questionService.insert(this.question)
        .then(res => {
          if (res.status === 200) {
            let data = res.json();

            this.questions.push(data.question);
            this.question = new Question;
            this.alternative = new Alternative;
            this.attribute = new Attribute;

            this.message = data.message;
          } else {
            console.log('Houve algum erro');
          }
        });
    } else {
      this.questionService.update(this.question)
        .then(res => {
          if (res.status === 200) {
            let data = res.json();

            let question = this.questions.find(question => question._id === this.question._id);
            let index = this.questions.indexOf(question);

            this.questions[index] = data.question;
            this.question = new Question;
            this.alternative = new Alternative;
            this.attribute = new Attribute;

            this.message = data.message;
          } else {
            console.log('Houve algum erro ao editar pergunta');
          }
        });
    }
  }

  edit(question: Question): void {
    this.question = Object.assign({}, question);
  }

  remove(question: Question): void {
    this.questionService.remove(question)
      .then(res => {
        if (res.status === 200) {
          let data = res.json();

          let index = this.questions.indexOf(question);
          this.questions.splice(index, 1);

          this.message = data.message;
        } else {
          console.log('Não foi possível remover pergunta');
        }
      });
  }

  addAlternative(): void {
    if (!this.question.alternatives) {
      this.question.alternatives = [this.alternative];
    } else {
      this.question.alternatives.push(this.alternative);
    }

    this.alternative = new Alternative;
  }

  addAttribute(): void {
    if (!this.question.attributes) {
      this.question.attributes = [this.attribute];
    } else {
      this.question.attributes.push(this.attribute);
    }

    this.attribute = new Attribute;
  }

  cancel(): void {
    this.question = new Question;
    this.alternative = new Alternative;
    this.attribute = new Attribute;
  }

  ngOnInit() {
    this.question = new Question;
    this.alternative = new Alternative;
    this.attribute = new Attribute;

    this.questionService.findAll()
      .then(res => {
        if (res.status === 200) {
          let data = res.json();

          this.message = data.menssage;
          this.questions = data.questions;
        } else {
          console.log('Não foi possível carregar perguntas');
        }
      });
  }
}
