import {Page} from 'ionic-framework';
import { CommonService } from '../../services/CommonService';

@Page({
  templateUrl: 'build/pages/subject/subject.html',
  providers: [CommonService]
})
export class Subject {
  constructor(commonService:CommonService) {
	commonService.getAllSubjects().subscribe(
		data => {this.subjects = data.subject_list; console.log(data);},
		err => commonService.showErrorMsg(err),
		() => console.log('Get all subjects -complete')
	);
  }
}
