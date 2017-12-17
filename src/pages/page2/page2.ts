import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeepThoughtProvider } from '../../providers/deep-thought/deep-thought';

/**
 * Generated class for the Page2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2Page {

  answer: string;
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public deepThoughtProvider: DeepThoughtProvider
  ) {
      this.answer = "...";
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter Page2Page');
    this.answer = "...";

    this.deepThoughtProvider.getAnswer()
    .then( (answer) => {
        this.answer = answer;
    })
  }

}
