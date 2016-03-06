import {NavController, NavParams} from 'ionic-framework/ionic';
import {Page} from 'ionic-framework/ionic';
import {Login} from '../login/login';

@Page({
	templateUrl: 'build/pages/signup/signup.html'
})
export class Signup {
  constructor(nav: NavController, params: NavParams) {
	this.nav = nav;  
  }
  studentLogin(){
		this.nav.push(Login, { name : 'login' });
  }
  
  
}
