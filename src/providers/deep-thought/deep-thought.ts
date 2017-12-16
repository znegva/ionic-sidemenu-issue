import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DeepThoughtProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DeepThoughtProvider {


  constructor(public http: HttpClient) {
    console.log('Hello DeepThoughtProvider Provider');
  }

  getAnswer():Promise<string>{
      return new Promise( (resolve,reject) => {
              let x=0;
              while(x < 2e9){
                  x += 1;
              }
              resolve("The answer is 42.");
          }
      );
  }

}
