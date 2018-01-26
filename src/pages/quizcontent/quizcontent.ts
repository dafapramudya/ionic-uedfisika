import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the QuizcontentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quizcontent',
  templateUrl: 'quizcontent.html',
})
export class QuizcontentPage {

  public quizTitle:any;
  public quizId:any;

  public username:any;
  public quiz:any;
  public dataQuiz:any;
  public data:any;
  public quizData:any;

  public no:any = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public http : Http) {

    this.quiz = {};
    this.data = {};
  }

  ionViewDidLoad() {
    this.quizTitle = this.navParams.get('quizTitle');
    this.quizId = this.navParams.get('quizId');

    this.username = this.navParams.get('username');
    this.quizLoad();
    console.log(this.quizData);
  }

  quizLoad(){
  	this.http.get('https://apifisika.000webhostapp.com/retrieve-data.php')
  	.map(res => res.json())
  	.subscribe(data=> {
      this.quizData = data;
    });
  }

  prepareData(){
    this.dataQuiz = {
      username:this.username,
      quiz:this.quiz,
      quizId:1
    };
  }


  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Kirim Jawaban?',
      message: 'Hai '+this.username+' sudah yakin untuk kirim jawaban?',
      buttons: [
        {
          text: 'Cek Kembali',
          handler: () => {
            console.log('mengko');
          }
        },
        {
          text: 'Kirim Jawaban',
          handler: () => {
            this.prepareData();
            this.navCtrl.push('ScorePage',this.dataQuiz);
          }
        }
      ]
    });
    confirm.present();
  }
}
