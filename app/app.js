import {App, Platform, Storage, SqlStorage} from 'ionic-framework';
import {TabsPage} from './pages/tabs/tabs';
import {Inject} from 'angular2/core';
import {Login} from './pages/login/login';
import {Message} from './pages/message/message';
import { SingletonService } from './services/SingletonService';


@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {} 
})
export class MyApp {
  constructor(@Inject(Platform) platform) {
    this.platform = platform;
    this.initializeApp();
    this.rootPage = Login;
    this.user = [];
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
  initializeApp() {
        this.platform.ready().then(() => {
            this.storage = new Storage(SqlStorage);
            //check if user table exist and have records
            /*
               this.storage.query("SELECT * FROM user").then((data) => {
                    this.user = [];
                    if(data.res.rows.length > 0) {
                        for(var i = 0; i < data.res.rows.length; i++) {
                            this.user.push({userId: data.res.rows.item(i).userId, studentId: data.res.rows.item(i).studentId});
                        }
                    }
                    if(this.user.length > 0){
                      var userData = {
                        user_id : userId,
                        student_id : studentId
                      }
                      console.log("user Date");
                      console.log(userData);
                      SingletonService.getInstance().setStudent(userData);
                    }
                }, (error) => {
                    console.log("ERROR -> " + JSON.stringify(error.err));
                });
            */
            this.storage.query('CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, userId TEXT, studentId TEXT)').then((data) => {
      
                console.log("TABLE CREATED -> " + JSON.stringify(data.res));              


            }, (error) => {
                console.log("ERROR -> " + JSON.stringify(error.err));
            });
        });
    }
}
