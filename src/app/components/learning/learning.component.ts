import { Component, OnInit } from '@angular/core';
import { Translation } from 'src/app/model/translation';
import { SelectionModel } from '@angular/cdk/collections';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VocabularyService } from 'src/app/service/vocabulary.service';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss']
})
export class LearningComponent implements OnInit {
  translatedWords: Translation[] = [
    {native_word: 'actually', foreign_word: 'eigentlich'},
    {native_word: 'beach', foreign_word: 'Strand'},
    {native_word: 'center', foreign_word: 'Zentrum'},
    {native_word: 'department', foreign_word: 'Abteilung'},
    {native_word: 'engine', foreign_word: 'Motor'},
    {native_word: 'features', foreign_word: 'Eigenschaften'},
    {native_word: 'government', foreign_word: 'Regierung'},
    {native_word: 'handbag', foreign_word: 'Handtasche'},
    {native_word: 'important', foreign_word: 'wichtig'},
    {native_word: 'beach', foreign_word: 'Strand'},
    {native_word: 'center', foreign_word: 'Zentrum'},
    {native_word: 'department', foreign_word: 'Abteilung'},
    {native_word: 'engine', foreign_word: 'Motor'},
    {native_word: 'features', foreign_word: 'Eigenschaften'},
    {native_word: 'government', foreign_word: 'Regierung'},
    {native_word: 'handbag', foreign_word: 'Handtasche'},
    {native_word: 'important', foreign_word: 'wichtig'},
    {native_word: 'jam', foreign_word: 'Marmelade'},
  ];
  displayedColumns: string[] = ['native_word', 'foreign_word','actions'];
  dataSource = this.translatedWords;
  highlightedRows = [];
  translationForm = new FormGroup({
    native_word: new FormControl('', [Validators.required, Validators.minLength(1)]),
    foreign_word: new FormControl('', [Validators.required, Validators.minLength(1)]),
  });
  testReady: boolean = false;

  constructor(private vocabularyService: VocabularyService) { }

  ngOnInit() {

  }

  deleteTranslation(translation: Translation){
    this.translatedWords = this.translatedWords.filter(item => item !== translation);
    this.dataSource = [...this.translatedWords];
    this.checkTestReady();
  }

  submitTranslation() {
    if (this.translationForm.valid) {
      this.translatedWords.push(this.translationForm.value);
      this.dataSource = [...this.translatedWords];
      this.checkTestReady();
      this.translationForm.reset();
      this.translationForm.markAsPristine();
      this.translationForm.markAsUntouched();
    }
  }

  checkTestReady() {
    if(this.translatedWords.length>=20){
      this.testReady = true;
      this.vocabularyService.setWords(this.translatedWords);
    }else{
      this.testReady = false;
    }
  }

}
