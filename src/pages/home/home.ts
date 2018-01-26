import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { MateriPage } from '../materi/materi';
import { PopoverPage } from '../popover/popover';
import { QuizselectPage } from '../quizselect/quizselect';
import { QuizPage } from '../quiz/quiz';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splash = true;
  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

  showMore(myEvent)
  {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  keMateri()
  {
    this.navCtrl.push(MateriPage);
  }

  keQuiz()
  {
    this.navCtrl.push(QuizPage);
  }

}