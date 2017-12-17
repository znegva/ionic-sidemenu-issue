import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Page1Page } from '../pages/page1/page1';
import { Page2Page } from '../pages/page2/page2';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DeepThoughtProvider } from '../providers/deep-thought/deep-thought';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    Page1Page,
    Page2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    Page1Page,
    Page2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DeepThoughtProvider
  ]
})
export class AppModule {}
