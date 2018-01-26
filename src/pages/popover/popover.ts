import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AboutPage } from '../about/about';

/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  template: `
  <ion-list>
    <button ion-item (click)="keAbout()">About</button>
  </ion-list>
`
})
export class PopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

  keAbout() {
    this.navCtrl.push(AboutPage);
    this.viewCtrl.dismiss();
  }

}
