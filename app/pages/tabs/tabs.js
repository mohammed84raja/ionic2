import {Page} from 'ionic-framework/ionic';
import {Message} from '../message/message';
import {More} from '../more/more';
import {Timetable} from '../timetable/timetable';
import {Marks} from '../marks/marks';
import {Settings} from '../settings/settings';

@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.message 			= 	Message;
    this.more 				= 	More;
    this.timetable			= 	Timetable;
	this.marks				=	Marks;
	this.settings			=	Settings;
  }
}
