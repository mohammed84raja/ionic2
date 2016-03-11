import {Page} from 'ionic-framework';
import {Classtimetable} from '../classtimetable/classtimetable';
import {Examtimetable} from '../examtimetable/examtimetable';


@Page({
	templateUrl: 'build/pages/timetable/timetable.html'
})
export class Timetable {
  constructor() {
	this.classtimetable		=	Classtimetable;
	this.examtimetable		=	Examtimetable;
	
  }
  
}