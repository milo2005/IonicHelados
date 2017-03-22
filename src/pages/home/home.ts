import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

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

  constructor(public navCtrl: NavController, public storage:Storage) {
    this.mainContent = HeladosPage;
    storage.get("user").then( val =>{ console.log(val.user) });
  }

  selectMenu(index: number) {
    if (index == 0) {
      this.mainContent = HeladosPage;
    } else {
      this.mainContent = BebidasPage;
    }
  }

  logout() {
    this.storage.set("logged", false);
    this.navCtrl.setRoot(LoginPage);
  }

}

export interface IMenu {
  label: string;
  icon: string;
} 
