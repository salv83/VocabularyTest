import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VocabularyService } from 'src/app/service/vocabulary.service';
import { Translation } from 'src/app/model/translation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  translatedWords: Translation[] = [];
  randomQuestions: Translation[] = [];
  answers: any[] = [];
  translationForm = new FormGroup({
    native_word: new FormControl({value: '', disabled: true}),
    submitted_answer: new FormControl('', [Validators.required, Validators.minLength(1)]),
  });
  totalQuestion: number = 20;
  currentNumber = 1;
  proposedIndex = 0;
  progress = this.currentNumber*(100/this.totalQuestion);

  constructor(private vocabularyService: VocabularyService, private router: Router) { }

  ngOnInit() {
    this.translatedWords = this.vocabularyService.getWords();
    if(this.translatedWords.length >= 20){ 
      for(let i = 0; i<20; i++){
        let randomIndex = Math.floor(Math.random()*this.translatedWords.length);
        this.randomQuestions[i] = this.translatedWords[randomIndex];
      }
      this.translationForm.patchValue({
        native_word: this.randomQuestions[this.proposedIndex].native_word
      });
    }
  }

  submitAnswer(){
    let submittedAnswer = this.translationForm.value.submitted_answer;
    if(submittedAnswer === this.randomQuestions[this.proposedIndex].foreign_word){
      this.answers[this.currentNumber-1] = this.randomQuestions[this.proposedIndex];
      this.answers[this.currentNumber-1]['submitted_answer'] = submittedAnswer;
      this.answers[this.currentNumber-1]['result'] = true;
    }else{
      this.answers[this.currentNumber-1] = this.randomQuestions[this.proposedIndex];
      this.answers[this.currentNumber-1]['submitted_answer'] = submittedAnswer;
      this.answers[this.currentNumber-1]['result'] = false;
    }

    this.randomQuestions.splice(this.proposedIndex,1);
    this.currentNumber++;
    if(this.currentNumber>=21){
      this.translationForm.controls['submitted_answer'].disable();
      this.vocabularyService.setAnswers(this.answers);
      this.router.navigate(['/result']);
    }else{
      this.progress = this.currentNumber*(100/this.totalQuestion);
      this.translationForm.reset();
      this.translationForm.markAsPristine();
      this.translationForm.markAsUntouched();
      this.proposedIndex = Math.floor(Math.random()*this.randomQuestions.length);
      this.translationForm.patchValue({
        native_word: this.randomQuestions[this.proposedIndex].native_word
      });
    }
  }
}
