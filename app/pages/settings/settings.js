import {NavController, NavParams} from 'ionic-framework/ionic';
import {Page} from 'ionic-framework/ionic';
import {Profile} from '../profile/profile';
import {Security} from '../security/security';
import {Login} from '../login/login';

@Page({
  templateUrl: 'build/pages/settings/settings.html'
})
export class Settings {
  constructor(nav: NavController, params: NavParams) {
	this.nav = nav;    
	this.profile		=	Profile;
	this.security		=	Security;
  }
  logout(){
		//this.nav.rootNav();
		this.nav.push(Login, { name : 'logout' });
  }
}
