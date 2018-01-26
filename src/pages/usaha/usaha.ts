import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { PengertianUsahaPage } from '../pengertian-usaha/pengertian-usaha';
import { RumusUsahaPage } from '../rumus-usaha/rumus-usaha';
import { SoalUsahaPage } from '../soal-usaha/soal-usaha';

/**
 * Generated class for the UsahaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usaha',
  templateUrl: 'usaha.html',
})
export class UsahaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsahaPage');
  }

  showMore(myEvent)
  {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  PengertianUsaha()
  {
    this.navCtrl.push(PengertianUsahaPage);
  }

  RumusUsaha()
  {
    this.navCtrl.push(RumusUsahaPage);
  }

  SoalUsaha()
  {
    this.navCtrl.push(SoalUsahaPage);
  }



}
