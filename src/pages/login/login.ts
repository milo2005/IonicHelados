import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//import { HomePage } from '../home/home';
import { HeladosPage } from '../helados/helados';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {

  }

  login() {
    this.navCtrl.push(HeladosPage)
  }

}
