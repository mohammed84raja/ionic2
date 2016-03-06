import {App, IonicApp, Animation, Modal, Platform, NavController, NavParams, Page, Events, ViewController} from 'ionic-framework/ionic';
import { CommonService } from '../../services/CommonService';

@Page({
	templateUrl: 'build/pages/message/message.html',
	providers: [CommonService]
})
export class Message {
  constructor(nav: NavController, commonService:CommonService, platform: Platform) {
	this.nav = nav;
  this.platform = platform;
		commonService.getAllMessage().subscribe(
				data => {this.msges = data.message_list; console.log(data);},
				err => commonService.showErrorMsg(err),
				() => console.log('Get all message -complete')
       	);
  }
  showToast() {
    this.platform.ready().then(() => {
        window.plugins.toast.show("Sample notification", "short", "top");
    });
  }
  openImageModal(characterNum) {
    let myModal = Modal.create(openImageSrc, characterNum);
    this.nav.present(myModal);
  },
  doRefresh(){
    console.log("doRefresh");
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