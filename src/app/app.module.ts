import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { HeladosPage } from '../pages/helados/helados';
import { AddHeladoPage } from '../pages/add-helado/add-helado';
import { BebidasPage } from '../pages/bebidas/bebidas';

import { HeladosData } from '../providers/helados-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    HeladosPage,
    AddHeladoPage,
    BebidasPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    HeladosPage,
    AddHeladoPage,
    BebidasPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, HeladosData]
})
export class AppModule { }
