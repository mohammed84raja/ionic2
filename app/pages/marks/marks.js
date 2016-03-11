import {NavController, NavParams} from 'ionic-framework';
import {Page} from 'ionic-framework';
import {forwardRef} from 'angular2/core';
import { CommonService } from '../../services/CommonService';
import { SingletonService } from '../../services/SingletonService';

@Page({
  templateUrl: 'build/pages/marks/marks-details.html',
  providers: [CommonService]
})
class MarkDetailsPage {
  constructor(commonService:CommonService, nav: NavController, params: NavParams) {
	this.nav = nav;
    this.selection = { title: params.data.name };
	this.currentTTable = [];
	commonService.getMarks().subscribe(
		data => {this.markList = data.mark_list;},
		err => commonService.showErrorMsg(err),
		() => console.log('Get all marks- complete')
	);
  }
}

@Page({
  templateUrl: 'build/pages/marks/marks.html',
  providers: [CommonService]
})
export class Marks {
  constructor(nav: NavController, commonService:CommonService) {
	this.nav = nav;
 	items = [];
 	this.commonService = commonService;
    commonService.getExamList().subscribe(
       	data => {this.items = data.exam_list;},
        err => commonService.showErrorMsg(err),
        () => console.log('Get all exam detail --complete')
   	);   


		/*this.items = [
		  {
			'title': 'Term 1',
			'description': 'Term 1'
		  },
		  {
			'title': 'Quarterly',
			'description': 'Quarterly'
		  },
		]*/
  }
  
  openNavDetailsPage(item) {  		
		SingletonService.getInstance().setExamType(item.exam_id);
		this.nav.push(MarkDetailsPage, { name: item.name });
  }
  
}
