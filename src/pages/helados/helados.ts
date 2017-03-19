import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Helado, HeladosData } from '../../providers/helados-data';
import { AddHeladoPage } from '../add-helado/add-helado';

@Component({
  selector: 'page-helados',
  templateUrl: 'helados.html'
})
export class HeladosPage {

  helados: Helado[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: HeladosData) { 
    this.helados = [];
  }

  ionViewDidLoad() {
    this.helados = this.service.data;
  }

  goToAdd() {
    this.navCtrl.push(AddHeladoPage)
  }

}
