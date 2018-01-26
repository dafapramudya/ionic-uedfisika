import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { PengertianEnergiPage } from '../pengertian-energi/pengertian-energi';
import { RumusEnergiPage } from '../rumus-energi/rumus-energi';
import { SoalEnergiPage } from '../soal-energi/soal-energi';

/**
 * Generated class for the EnergiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-energi',
  templateUrl: 'energi.html',
})
export class EnergiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnergiPage');
  }

  showMore(myEvent)
  {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  PengertianEnergi()
  {
    this.navCtrl.push(PengertianEnergiPage);
  }

  RumusEnergi()
  {
    this.navCtrl.push(RumusEnergiPage);
  }

  SoalEnergi()
  {
    this.navCtrl.push(SoalEnergiPage);
  }
}
