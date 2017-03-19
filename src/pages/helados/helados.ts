import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AddHeladoPage } from '../add-helado/add-helado';
import { Helado, HeladosData } from '../../providers/helados-data';

/*
  Generated class for the Helados page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-helados',
  templateUrl: 'helados.html'
})
export class HeladosPage {

  helados: Helado[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: HeladosData) { }

  ionViewDidLoad() {
    this.helados = this.service.data;
  }

  add() {
    this.navCtrl.push(AddHeladoPage);
  }

}
