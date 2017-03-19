import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Helado, HeladosData } from '../../providers/helados-data';


@Component({
  selector: 'page-helados',
  templateUrl: 'helados.html'
})
export class HeladosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public service:HeladosData) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeladosPage');
  }

}
