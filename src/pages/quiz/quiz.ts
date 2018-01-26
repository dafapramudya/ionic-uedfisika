import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { PopoverPage } from '../popover/popover';

/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {

  public quizTitle:any;
  public quizId:any;

  public username:any;
  public scores:any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams, public http : Http,public popoverCtrl: PopoverController) {
    this.username = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizPage');
    this.quizTitle = this.navParams.get('quizTitle');
    this.quizId = this.navParams.get('quizId');

  }

  ionViewDidEnter(){
    this.http.get('https://apifisika.000webhostapp.com/score.php?id=1')
  	.map(res => res.json())
  	.subscribe(data=> {
      this.scores = data;
      // console.log(data);
    });
  }

  showMore(myEvent)
  {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
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
              username:this.username,
              quizTitle:this.quizTitle,
              quizId:this.quizId
            };
        
            this.navCtrl.push('QuizcontentPage',data);
          }
        }
      ]
    });
    confirm.present();
  }

}
