import {NavController, NavParams, Storage, SqlStorage, Platform} from 'ionic-framework';
import {Page} from 'ionic-framework';
import {TabsPage} from '../tabs/tabs';
import {Signup} from '../signup/signup';
import { CommonService } from '../../services/CommonService';
import { SingletonService } from '../../services/SingletonService';

@Page({
	templateUrl: 'build/pages/login/login.html',
	providers: [CommonService]
})
export class Login {
  constructor(nav: NavController, params: NavParams, commonService:CommonService, platform: Platform) {
  	this.commonService = commonService;
  	this.nav 		= 	nav; 
    this.platform = platform;
  	this.nav.swipeBackEnabled = false;  
  	this.studentSignup	= Signup;
  	this.studenname = "";
  	this.password = "";
    this.platform.ready().then(() => {
            this.storage = new Storage(SqlStorage);
            //this.refresh();
        });
  }
  
  studentLogin(){
  	var param = {
  		username : this.studenname,
  		password : this.password
  	}
	  this.commonService.studentLogin(param).subscribe(
				data => {this.processLogin(data); console.log(data);},
				err => this.commonService.showErrorMsg(err),
				() => console.log('Login process -complete')
	   	);
	  
  }
  processLogin(data) {
  	if(data.status == 200 || data.status == 'success') {
       var userData =  JSON.parse(data._body);
  		if(userData.student_id){

        SingletonService.getInstance().setStudent(userData);
        this.addUser(userData.student_id, userData.user_id);
  			this.nav.push(TabsPage, { name : 'login' });
  		}else{
        this.commonService.showErrorMsg(data);
      }
  		
  	} else {
  		this.commonService.showErrorMsg(data);
  	}
 
  }
   addUser(studentId, userId) {
      this.studentId = studentId;
      this.userId = userId;
        this.platform.ready().then(() => {
          console.log("============================================");
          console.log("INSERT INTO student (studentId, userId) VALUES (\""+this.studentId+"\", \""+this.userId+"\")");

            this.storage.query("INSERT INTO student(studentId,userId) VALUES(\""+this.studentId+"\", \""+this.userId+"\")").then((data) => {
                console.log("User added successful");
                console.log(JSON.stringify(data.res));

            }, (error) => {
                console.log("ERROR -> " + JSON.stringify(error.err));
            });
        });
    }
  
  
}
