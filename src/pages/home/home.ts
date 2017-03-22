import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { HeladosPage } from '../helados/helados';
import { BebidasPage } from '../bebidas/bebidas';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  menuOpc: IMenu[] = [

    { label: 'Inicio', icon: 'home' },
    { label: 'Bebidas', icon: 'md-beer' },
    { label: 'Pizza', icon: 'md-pizza' },
    { label: 'Comida', icon: 'md-restaurant' },
    { label: 'Cafes', icon: 'md-pint' },
    { label: 'Bar', icon: 'md-wine' }

  ]

  mainContent: any;

  constructor(public navCtrl: NavController) {
    this.mainContent = HeladosPage;
  }

  selectMenu(index: number) {
    if(index == 0){
      this.mainContent = HeladosPage;
    }else{
      this.mainContent = BebidasPage;
    }
  }

  logout() {
    this.navCtrl.setRoot(LoginPage);
  }

}

export interface IMenu {
  label: string;
  icon: string;
} 
