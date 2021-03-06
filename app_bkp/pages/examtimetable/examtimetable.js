import {NavController, NavParams} from 'ionic-framework';
import {Page, Pipe, PipeTransform} from 'ionic-framework';
import {forwardRef} from 'angular2/core';
import { CommonService } from '../../services/CommonService';

@Page({
  templateUrl: 'build/pages/examtimetable/examtimetable-details.html',
  providers: [CommonService]
})
class NavigationDetailsPage {
  constructor(commonService:CommonService, nav: NavController, params: NavParams) {
		this.nav = nav;
		
		this.currentTTable = [];
		commonService.getExamDetails().subscribe(
			data => {this.timetable = data.exam_schedule;},
			err => commonService.showErrorMsg(err),
			() => console.log('Get exam timetable-- complete')
		);
		
		this.selection = { title: params.data.exam_name };
  }
  changeDateFormate(date){
  	return new Date(date);
  }
}

@Page({
	templateUrl: 'build/pages/examtimetable/examtimetable.html',
	providers: [CommonService]
})
export class Examtimetable {
	items = [];
	constructor(commonService:CommonService, nav: NavController) {
		this.nav = nav;
		this.currentTTable = [];
		this.commonService = commonService;
        commonService.getExamList().subscribe(
	       	data => {this.items = data.exam_list;},
	        err => commonService.showErrorMsg(err),
	        () => console.log('Get all exam detail --complete')
       	);       
		
	}
	
	openNavDetailsPage(item) {
		this.commonService.setExamType(item.exam_id);
		this.nav.push(NavigationDetailsPage, { exam_name: item.name });
	}
   
}
