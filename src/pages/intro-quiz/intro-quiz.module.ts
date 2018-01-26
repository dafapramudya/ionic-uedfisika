import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntroQuizPage } from './intro-quiz';

@NgModule({
  declarations: [
    IntroQuizPage,
  ],
  imports: [
    IonicPageModule.forChild(IntroQuizPage),
  ],
})
export class IntroQuizPageModule {}
