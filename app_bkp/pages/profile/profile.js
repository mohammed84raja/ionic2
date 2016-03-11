import {Page, Platform} from 'ionic-framework';
import {forwardRef} from 'angular2/core';
import { CommonService } from '../../services/CommonService';

@Page({
	templateUrl: 'build/pages/profile/profile.html',
	providers: [CommonService]
})
export class Profile {
	constructor(commonService:CommonService) {
		this.commonService = commonService;
		this.userDetails = {};
		commonService.getUserDetails().subscribe(
			data => {this.userDetails = data.personal_info;},
			err => commonService.showErrorMsg(err),
			() => console.log('Get profile- complete')
		); 
	}
	UpdateUserProfile(){
		console.log(this.userDetails);
		//process user data
		var user = {};
		user.name = this.userDetails.student_name;
		user.address = this.userDetails.addr;
		user.district = this.userDetails.district_id;
		user.gender = this.userDetails.gender;
		user.mobile = this.userDetails.mobile;
		user.contact_id = this.userDetails.contact_id;

		user.data_of_birth = this.userDetails.dob;
		user.pin_code = this.userDetails.pin;
		user.phone = this.userDetails.phone;

		this.commonService.updateUserProfile(user).subscribe(
			data => this.profileChangedSuccessfully(data),
			err => this.commonService.showErrorMsg(err),
			() => console.log('Get profile- complete')
		); 
	}
	profileChangedSuccessfully(data) {
		
		var msg = "";
	  	var response = null;
	  	if(data._body){
			response = JSON.parse(data._body);
			if(response.status == "SUCCESS") {
				this.commonService.showErrorMsg("Updated!", "Success");
			}
			else{
				this.commonService.showErrorMsg(data);
			}
		}
		
	}
  
}
