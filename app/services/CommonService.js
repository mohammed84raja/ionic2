
import { Inject} from 'angular2/core';
import {Alert, NavController} from 'ionic-framework';
import { Http , Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { SingletonService } from '../services/SingletonService';

export class CommonService {  
 
    constructor(@Inject(Http) http: Http, nav: NavController) {
    	
    	this.nav = nav;
        this.serverlocation = /*"http://localhost:8100/api" ;//*/ "http://www.agarum.com/api/v2/";
        this.http = http;
        this.student = {};
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.headers.append('Authorization',  SingletonService.getInstance().getAuthorization());
	    this.studentLogin = function(param) {	  
	      var uiparams = Object.keys(param).map(function(k) {
			    return encodeURIComponent(k) + '=' + encodeURIComponent(param[k])
			}).join('&');
		    var url = this.serverlocation +'user/login';			
			
//"username=9986559929&password=abc123"
			return this.http.post(url, uiparams , {
				headers: this.headers
			});
	    }
	    this.changePassword = function(param) {

	    	this.student = SingletonService.getInstance().getStudent();
	    	param.user_id = this.student["user_id"];
	        var uiparams = Object.keys(param).map(function(k) {
			    return encodeURIComponent(k) + '=' + encodeURIComponent(param[k])
			}).join('&');

		    var url = this.serverlocation +'user/security';
			return this.http.put(url, uiparams, {
				headers: this.headers
			});
	    }
	    this.updateUserProfile = function(param) {  
	        var uiparams = Object.keys(param).map(function(k) {
			    return encodeURIComponent(k) + '=' + encodeURIComponent(param[k])
			}).join('&');
		    var url = this.serverlocation +'user/profile';			
			return this.http.put(url, uiparams, {
				headers: this.headers
			});

	    }
	    this.getUserDetails = function() {	
        	var url = this.serverlocation +'user/profile';
		    return this.http.get(url,  {
				headers: this.headers
			}).map(res => res.json());
	    }
	    this.getAllTimetable = function() {
        	var url = this.serverlocation +'student/timetable';
		    return this.http.get(url, {
				headers: this.headers
			}).map(res => res.json());
		}
		this.getExamDetails = function() {
        	var url = this.serverlocation +'student/exam-schedule?exam_id=' + SingletonService.getInstance().getExamType();
			return this.http.get(url,  {
				headers: this.headers
			}).map(res => res.json());
		}
		this.getExamList = function() {
        	var url = this.serverlocation +'student/exams';
		    return this.http.get(url, {
				headers: this.headers
			}).map(res => res.json());
		}
		this.getMarks = function() {
        	var url = this.serverlocation +'student/marks?exam_id=' + SingletonService.getInstance().getExamType();
			return this.http.get(url,  {
				headers: this.headers
			}).map(res => res.json());
		}
		this.getAllMessage = function() {

			var url = this.serverlocation +'student/messages?offset='+ SingletonService.getInstance().getOffset();			
			return this.http.get( url, {
		       	headers: this.headers
		     }).map(res => res.json());
		
		}
		this.getAllSubjects = function() {
        	var url = this.serverlocation +'student/subjects';
		    return this.http.get(url, {
		        headers: this.headers
		    }).map(res => res.json());
		}
		this.showErrorMsg = function(msg, msgTitle) {
			if(msg._body){
				msg = JSON.parse(msg._body);
				msg = msg.message;
			}
			let alert = Alert.create({
		      title: (msgTitle ? "" :'Error'),
		      body: msg,
		      buttons: ['Ok']
		    });
		    this.nav.present(alert);
		}
    }  

    aLocalStorage = {
    	getAllMessages : function() {

    	}
    } 
 
}