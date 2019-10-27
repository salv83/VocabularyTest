import { Injectable } from '@angular/core';
import { Translation } from '../model/translation';

@Injectable({
  providedIn: 'root'
})
export class VocabularyService {
  translatedWords: Translation[] = [];
  answers: any[] = [];

  constructor() { }

  setWords(words: Translation[] ){ 
    this.translatedWords = words;
  }

  getWords(){ 
    return this.translatedWords;
  }

  setAnswers(answers: any[] ){ 
    this.answers = answers;
  }

  getAnswers(){ 
    return this.answers;
  }
}
