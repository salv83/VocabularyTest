import { Component, OnInit } from '@angular/core';
import { VocabularyService } from 'src/app/service/vocabulary.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  answers: any[] = [];
  displayedColumns: string[] = ['native_word', 'foreign_word','submitted_answer','result'];
  dataSource = this.answers;
  hit = 0;
  hitRatio = 0;
  constructor(private vocabularyService: VocabularyService) {}

  ngOnInit() {
    this.answers = this.vocabularyService.getAnswers();
    this.dataSource = [...this.answers];
    if(this.answers.length>0){ 
      for(let i = 0; i<20; i++){
        if(this.answers[i].result){
          this.hit++;
        }
      }
      this.hitRatio = (100 * (this.hit/20));
    }
  }

}
