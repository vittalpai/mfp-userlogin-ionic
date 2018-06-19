import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  balance: string;

  constructor(public navCtrl: NavController) { 
    console.log('--> HomePage constructor')
  }

  getBalance() {
    var resourceRequest = new WLResourceRequest("/adapters/ResourceAdapter/balance",WLResourceRequest.GET);
    resourceRequest.send().then((response) => {
      console.log('-->  getBalance(): Success ', response);
        this.balance = response.responseText;
    },
    function(error){
        console.log('-->  getBalance():  ERROR ', error.responseText);
        console.log(error);
    });
  }
  
}
