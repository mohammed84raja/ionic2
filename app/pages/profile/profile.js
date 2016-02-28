import {Page, Platform} from 'ionic-framework/ionic';
import {forwardRef} from 'angular2/core';
import { CommonService } from '../../services/CommonService';

@Page({
	templateUrl: 'build/pages/profile/profile.html',
	providers: [CommonService]
})
export class Profile {
	constructor(commonService:CommonService) {
		this.userDetails = {};
			commonService.getUserDetails().subscribe(
			data => {this.userDetails = data.personal_info;},
			err => commonService.showErrorMsg(err),
			() => console.log('Get profile- complete')
		); 
	}
  
}
