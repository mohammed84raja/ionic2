import {Page, Platform} from 'ionic-framework/ionic';
import {forwardRef} from 'angular2/core';
import { CommonService } from '../../services/CommonService';

@Page({
	templateUrl: 'build/pages/classtimetable/classtimetable.html',
	providers: [CommonService]
})
export class Classtimetable {
  constructor(commonService:CommonService) {
	this.day = "monday";
		this.currentTTable = [];
        commonService.getAllTimetable().subscribe(
       	data => {this.list = data.timetable_list; this.loadTTable();},
        err => commonService.showErrorMsg(err),
        () => console.log('Get all info about- timetable complete')
       	);
  }
	loadTTable() {
		var currentDay = this.day.toUpperCase();
		var currentTTable = this.list[currentDay];
		var index = 0;
		this.currentTTable = [];
		for(var key in currentTTable){
			this.currentTTable.push(currentTTable[key]);
		}
		
	}
}
