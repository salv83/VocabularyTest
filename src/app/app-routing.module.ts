import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearningComponent } from './components/learning/learning.component';
import { TestComponent } from './components/test/test.component';
import { ResultComponent } from './components/result/result.component';


const routes: Routes = [
  {path: '', component: LearningComponent },
  {path: 'test', component: TestComponent },
  {path: 'result', component: ResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
