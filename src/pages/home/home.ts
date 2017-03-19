import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
// import { HeladosPage } from '../helados/helados';
// import { BebidasPage } from '../bebidas/bebidas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // menuOpc:IMenu[] = [

  //   {label:'Inicio', icon:'home'},
  //   {label:'Bebidas', icon:'md-beer'},
  //   {label:'Pizza', icon:'md-pizza'},
  //   {label:'Comida', icon:'md-restaurant'},
  //   {label:'Cafes', icon:'md-pint'},
  //   {label:'Bar', icon:'md-wine'}

  // ]

  constructor(public navCtrl: NavController) {

  }

  selectMenu(index: number) {

  }

  logout() {
    this.navCtrl.pop();
  }

}

export interface IMenu{
  label:string;
  icon:string;
} 
