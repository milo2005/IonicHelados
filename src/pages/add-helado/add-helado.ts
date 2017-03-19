import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Helado, HeladosData } from '../../providers/helados-data';

/*
  Generated class for the AddHelado page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-helado',
  templateUrl: 'add-helado.html'
})
export class AddHeladoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: HeladosData) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddHeladoPage');
  }

}
