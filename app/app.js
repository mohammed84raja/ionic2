import {App, Platform} from 'ionic-framework';
import {Inject} from 'angular2/core';
import {Login} from './pages/login/login';
import {Message} from './pages/message/message';


@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {} 
})
export class MyApp {
  constructor(@Inject(Platform) platform) {
    this.rootPage = Login;

    platform.ready().then(() => {
      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      // Keyboard.setAccessoryBarVisible(false);
      //
      // For example, we might change the StatusBar color. This one below is
      // good for dark backgrounds and light text:
      // StatusBar.setStyle(StatusBar.LIGHT_CONTENT)
    });
  }
}
