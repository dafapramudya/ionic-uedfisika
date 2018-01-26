import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuizPage } from '../quiz/quiz';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { QuizcontentPage } from '../quizcontent/quizcontent';

/**
 * Generated class for the IntroQuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-intro-quiz',
  templateUrl: 'intro-quiz.html',
})
export class IntroQuizPage 
{
  public username:any;
  public items : any = [];
  constructor(public navCtrl: NavController, public alertCtrl: AlertController)
  {
    this.username='';
  }

  konfirmasiDsit() 
  {
    let confirm = this.alertCtrl.create({
      title: 'Mulai Quiz?',
      message: 'Hai '+this.username+' apakah anda yakin ingin memulai quiz?',
      buttons: [
        {
          text: 'Belajar dulu',
          handler: () => {
            console.log('mengko');
          }
        },
        {
          text: 'Mulai Quiz',
          handler: () => {
            let data = {
              username:this.username
            };
            this.navCtrl.push(QuizcontentPage, data);
          }
        }
      ]
    });
    confirm.present();
  }
}
