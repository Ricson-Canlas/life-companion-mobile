import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UserInfoPage } from '../userinfo/userinfo';
@Component({
  selector: 'page-confirm',
  templateUrl: 'confirm.html'
})
export class ConfirmPage {

  constructor(public navCtrl: NavController) {
  	
  }

  toUserInfo(){
  	this.navCtrl.push(UserInfoPage, null,{
  	  
  	});
  }

}

