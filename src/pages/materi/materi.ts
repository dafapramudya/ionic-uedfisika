import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { UsahaPage } from '../usaha/usaha';
import { EnergiPage } from '../energi/energi';
import { DayaPage } from '../daya/daya';

/**
 * Generated class for the MateriPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-materi',
  templateUrl: 'materi.html',
})
export class MateriPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

  showMore(myEvent)
  {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MateriPage');
  }

  keUsaha()
  {
    this.navCtrl.push(UsahaPage);
  }

  keEnergi()
  {
    this.navCtrl.push(EnergiPage);
  }

  keDaya()
  {
    this.navCtrl.push(DayaPage);
  }

}
