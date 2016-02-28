import {NavController, NavParams} from 'ionic-framework/ionic';
import {Page} from 'ionic-framework/ionic';
import {Subject} from '../subject/subject';
import {Events} from '../events/events';
import {Transport} from '../transport/transport';
import {Hostel} from '../hostel/hostel';
import {Map} from '../map/map';


@Page({
  templateUrl: 'build/pages/more/more.html'
})
export class More {
  constructor(nav: NavController, params: NavParams) {
	this.nav = nav;    
	this.events			=	Events;
	this.subject		=	Subject;
	this.transport		=	Transport;
	this.hostel			=	Hostel;
	this.map			=	Map;
	
  }
  
}
