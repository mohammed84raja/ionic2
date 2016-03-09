import {Page, Platform} from 'ionic-framework';
import {forwardRef} from 'angular2/core';
import { CommonService } from '../../services/CommonService';

@Page({
	templateUrl: 'build/pages/security/security.html',
	providers: [CommonService]
})
export class Security {
  constructor(commonService:CommonService) {
  	this.info = {};
  	this.commonService = commonService;	  
  }

  changePassword() {
  	this.commonService.changePassword(this.info).subscribe(
		data => {this.passwordChangeSuccessfully(data); console.log(data);},
		err => this.commonService.showErrorMsg(err),
		() => console.log('Login process -complete')
   	);
  }
  passwordChangeSuccessfully(data) {
  	var msg = "";
  	var response = null;
  	if(data._body){
		response = JSON.parse(data._body);
		if(response.status == "SUCCESS") {
			this.commonService.showErrorMsg("Password changes successfully", "Success");
		}
		else{
			this.commonService.showErrorMsg(data);
		}
	}

  	
  }
  
}
