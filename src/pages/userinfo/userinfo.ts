import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { VerifiedPage } from '../verified/verified';
@Component({
  selector: 'page-userinfo',
  templateUrl: 'userinfo.html'
})
export class UserInfoPage {

  constructor(public navCtrl: NavController) {
  	
  }
  toVerified(){
  	this.navCtrl.push(VerifiedPage, null,{
  	  
  	});
  }

}

