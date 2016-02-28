
import { Inject} from 'angular2/core';
import {Alert, NavController} from 'ionic-framework/ionic';
import {Page, Platform} from 'ionic-framework/ionic';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';
import { SingletonService } from '../services/SingletonService';

export class CommonService {  
 
    constructor(@Inject(Http) http: Http, nav: NavController,@Inject(Platform)platform: Platform) {
    	
    	this.nav = nav;
    	this.platform = platform;
        this.serverlocation = "http://localhost:8100/build/REST/";
        this.http = http;
        this.student = {};
	    this.studentLogin = function(param) {	  
	        var uiparams = Object.keys(param).map(function(k) {
			    return encodeURIComponent(k) + '=' + encodeURIComponent(param[k])
			}).join('&');
		    var url = this.serverlocation +'login-success.json';
		    return this.http.get(url).map(res => res.json());
	    }
	    this.getUserDetails = function() {	
	    	this.platform.ready().then(() => {
            window.plugins.toast.show("Sample notification", "short", "top");
        });

        	this.student = SingletonService.getInstance().getStudent();
        	if(this.student.student_id){
        		var url = this.serverlocation +'profile.json' + "/" + this.student.student_id;
        	}
		    
		    //return this.http.get(url).map(res => res.json());
	    }
	    this.getAllTimetable = function() {
		    var url = this.serverlocation +'timetable.json';
		    return this.http.get(url).map(res => res.json());
		}
		this.getExamDetails = function() {
			var url = this.serverlocation +'exams-schedule-success.json';
			return this.http.get(url).map(res => res.json());
		}
		this.getExamList = function() {
		    var url = this.serverlocation +'exams.json';
		    return this.http.get(url).map(res => res.json());
		}
		this.getMarks = function() {
			var url = this.serverlocation +'marks-success.json';
			return this.http.get(url).map(res => res.json());
		}
		this.getAllMessage = function() {
		    var url = this.serverlocation + 'messages.json';
		    return this.http.get(url).map(res => res.json());
		}
		this.getAllSubjects = function() {
		    var url = this.serverlocation + 'subjects.json';
		    return this.http.get(url).map(res => res.json());
		}
		this.showErrorMsg = function(msg) {
			
			let alert = Alert.create({
		      title: 'Error',
		      body: msg,
		      buttons: ['Ok']
		    });
		    this.nav.present(alert);
		}
    }   
 
}