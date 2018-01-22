import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from "jquery";


//Page
import { ConfirmPage } from '../confirm/confirm';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  	
  }

  toConfirm(){
  	this.navCtrl.push(ConfirmPage, null,{
  	  
  	});
  }
}
