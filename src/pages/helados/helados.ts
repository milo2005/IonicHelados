import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AddHeladoPage } from '../add-helado/add-helado';
import { Helado, HeladosData } from '../../providers/helados-data';

@Component({
  selector: 'page-helados',
  templateUrl: 'helados.html'
})
export class HeladosPage {

  helados: Helado[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: HeladosData) {
      this.helados = this.service.data;
   }

  ionViewDidLoad() {
    
  }

  add() {
    this.navCtrl.parent.push(AddHeladoPage);
    
  }

}
