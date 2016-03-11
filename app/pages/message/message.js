import {App, IonicApp, Animation, Modal, Platform, NavController, NavParams, Page, Events, ViewController} from 'ionic-framework';
import { CommonService } from '../../services/CommonService';
import { SingletonService } from '../../services/SingletonService';

@Page({
	templateUrl: 'build/pages/message/message.html',
	providers: [CommonService]
})

export class Message {
  constructor(nav: NavController, commonService:CommonService, platform: Platform) {
	this.nav = nav;
  this.platform = platform;
  this.msges = [];
  this.commonService = commonService;
	commonService.getAllMessage().subscribe(
			data => {this.addMessages(data); console.log(data);},
			err => this.commonService.showErrorMsg(err),
			() => console.log('Get all message -complete')
     	);
  }
  /*showToast() {
    this.platform.ready().then(() => {
        window.plugins.toast.show("Sample notification", "short", "top");
    });
  }
  openImageModal(characterNum) {
    let myModal = Modal.create(openImageSrc, characterNum);
    this.nav.present(myModal);   
  }*/
  
 doRefresh(refresher) { 
    this.commonService.getAllMessage().subscribe(
        data => {this.addMessages(data); refresher.complete();},
        err => this.commonService.showErrorMsg(err),
        () => console.log('Get all message -complete')
        );
  }
  getData() {
    
  }
  addMessages(data) {
    var messages =  data.message_list;
    var pageSize = data.num_rows;
    var offset = data.offset;
    this.msges = this.msges.concat(messages);
    SingletonService.getInstance().setPageSize(pageSize);
    SingletonService.getInstance().setOffset(offset);
  }
  doStart(refresher) {
    console.log('Doing Start', refresher);
  }

  doPulling(refresher) {
    console.log('Pulling', refresher);
  }

  noOfdaysfromToday(cdate) {
		if(!cdate) {
			return "";
		}
		var currentDate = new Date() ;
		cdate = new Date(cdate);
		var diffInMilliseconds = currentDate.getTime() - cdate.getTime();
		var oneDay = 1000*60*60*24;
		var noOfDaysDiff = parseInt(diffInMilliseconds / oneDay, 10);
		return noOfDaysDiff;
  }
  trimMessage(msg) {
    var maxLen = 20;
    if(msg.length > maxLen){
      msg = msg.substring(0, maxLen);
      msg = msg + "...";
    }
    return msg;
  }
  
}


@Page({
  templateUrl: 'build/pages/images/images.html'
})

class openImageSrc {

    constructor(platform: Platform, params: NavParams, viewCtrl: ViewController) {
        this.viewCtrl = viewCtrl;
        this.params = params;
        if (platform.is('android')) {
            this.currentPlatform = 'android';
        } else {
            this.currentPlatform = 'ios';
        }

        
        this.image = { src: params.data };

  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}