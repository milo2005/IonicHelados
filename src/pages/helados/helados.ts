import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Helado, HeladosData } from '../../providers/helados-data';
import { AddHeladoPage } from '../add-helado/add-helado';

@Component({
  selector: 'page-helados',
  templateUrl: 'helados.html'
})
export class HeladosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: HeladosData) { }

  ionViewDidLoad() {

  }

  goToAdd() {
    this.navCtrl.push(AddHeladoPage)
  }

}
