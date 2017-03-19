import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Helado, HeladosData } from '../../providers/helados-data';

@Component({
  selector: 'page-add-helado',
  templateUrl: 'add-helado.html'
})
export class AddHeladoPage {

  helado: Helado;

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: HeladosData) { 
    this.helado =  new Helado()
  }

  save() {

  }

}
