import {NavController, NavParams} from 'ionic-framework/ionic';
import {Page} from 'ionic-framework/ionic';
import {TabsPage} from '../tabs/tabs';
import {Signup} from '../signup/signup';
import { CommonService } from '../../services/CommonService';
import { SingletonService } from '../../services/SingletonService';

@Page({
	templateUrl: 'build/pages/login/login.html',
	providers: [CommonService]
})
export class Login {
  constructor(nav: NavController, params: NavParams, commonService:CommonService) {
	this.commonService = commonService;
	this.nav 		= 	nav; 
	this.nav.swipeBackEnabled = false;  
	this.studentSignup	= Signup;
	this.studenname = "";
	this.password = "";
  }
  
  studentLogin(){
  	var param = {
  		username : this.studenname,
  		password : this.password
  	}
	  this.commonService.studentLogin(param).subscribe(
				data => {this.processLogin(data); console.log(data);},
				err => commonService.showErrorMsg(err),
				() => console.log('Login process -complete')
	   	);
	  
  }
  processLogin(data) {
  	if(data.status == 'SUCCESS') {
  		if(data.student_id){

        SingletonService.getInstance().setStudent(data);
  			this.nav.push(TabsPage, { name : 'login' });
  		}
  		
  	} else if(data.status == 'FAILED') {
  		this.commonService.showErrorMsg("Login failed!!!" + data.message);
  	}
  
  	console.log(data);
  }
  
  
}
