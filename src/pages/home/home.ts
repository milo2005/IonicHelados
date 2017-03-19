import { Component } from '@angular/core';

import { NavController, List } from 'ionic-angular';
import { HeladosPage } from '../helados/helados';
import { AddHeladoPage } from '../add-helado/add-helado';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mainContent:any = HeladosPage

  constructor(public navCtrl: NavController) {

  }

  selectMenu(index:number){

    if(index == 0)
      this.mainContent = HeladosPage;
    else
      this.mainContent = AddHeladoPage;
  }

  logout(){
    this.navCtrl.pop();
  }

}
