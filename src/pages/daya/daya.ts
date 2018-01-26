import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { PengertianDayaPage } from '../pengertian-daya/pengertian-daya';
import { RumusDayaPage } from '../rumus-daya/rumus-daya';
import { SoalDayaPage } from '../soal-daya/soal-daya';

/**
 * Generated class for the DayaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-daya',
  templateUrl: 'daya.html',
})
export class DayaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DayaPage');
  }

  showMore(myEvent)
  {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  PengertianDaya()
  {
    this.navCtrl.push(PengertianDayaPage);
  }

  RumusDaya()
  {
    this.navCtrl.push(RumusDayaPage);
  }

  SoalDaya()
  {
    this.navCtrl.push(SoalDayaPage);
  }

}
