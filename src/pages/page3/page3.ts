import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeepThoughtProvider } from '../../providers/deep-thought/deep-thought';

/**
 * Generated class for the Page3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html',
})
export class Page3Page {
      answer: string;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public deepThoughtProvider: DeepThoughtProvider
  ) {
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter Page2Page');
    this.answer = "...";

    setTimeout( ()=>{
        this.deepThoughtProvider.getAnswer()
        .then( (answer) => {
            this.answer = answer;
        });
    }, 50);

  }

}
