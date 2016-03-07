import {App, IonicApp, Animation, Modal, Platform, NavController, NavParams, Page, Events, ViewController} from 'ionic-framework';
import {Page} from 'ionic-framework';
import {forwardRef} from 'angular2/core';

@Page({
  templateUrl: 'build/pages/events/events.html'
})
export class Events {
  constructor(nav: NavController) {
	this.nav = nav;
		this.items = [
		  {
			'title': 'Story Telling Competitions',
			'description': "Children Won Prizes for JAM (Just A Minute) & Story Telling Competitions - Grade I & II",
			'date':'Dec 16, 2015',
			'img':	'img/story-telling.jpg'
		  },
		  {
			'title': 'Halloween Day',
			'description': "Celebrating the halloween Day",
			'date':'Oct 30, 2015',
			'img':	'img/halloween-day.jpg'
		  },
		  {
			'title': 'Krishnashtami Celebration',
			'description': "Celebrating Krishnashtami day" ,
			'date':'Sep 04, 2015',
			'img':	'img/krishnashtami.jpg'
			
		  }
		]
  }
  
  openImageModal(item) {
	  
    let myModal = Modal.create(openImageSrc, item);
    this.nav.present(myModal);
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

        
        this.image = { src: params.data.img, title: params.data.title};

  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
