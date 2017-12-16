import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeepThoughtProvider } from '../../providers/deep-thought/deep-thought';

/**
 * Generated class for the Page1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
})
export class Page1Page {

  answer: string;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public deepThoughtProvider: DeepThoughtProvider
  ) {
      this.answer = "...";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page1Page');
    this.answer = "...";

    this.deepThoughtProvider.getAnswer()
    .then( (answer) => {
        this.answer = answer;
    })
  }

}
