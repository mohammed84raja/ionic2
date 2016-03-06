
import { Inject} from 'angular2/core';
import {Alert, NavController} from 'ionic-framework/ionic';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';
import { SingletonService } from '../services/SingletonService';

export class CommonService {  
 
    constructor(@Inject(Http) http: Http, nav: NavController) {
    	
    	this.nav = nav;
        this.serverlocation = /*"http://localhost:8100/api" ;//*/ "http://www.agarum.com/api/v1/";
        this.http = http;
        this.student = {};
	    this.studentLogin = function(param) {	  
	        var uiparams = Object.keys(param).map(function(k) {
			    return encodeURIComponent(k) + '=' + encodeURIComponent(param[k])
			}).join('&');
		    var url = this.serverlocation +'user/login';

			var headers = new Headers();
			headers.append('Content-Type', 'application/x-www-form-urlencoded');

			return this.http.post(url, "username=9986559929&password=abc123", {
				headers: headers
			});
	    }
	    this.updateUserProfile = function(param) {  
	        var uiparams = Object.keys(param).map(function(k) {
			    return encodeURIComponent(k) + '=' + encodeURIComponent(param[k])
			}).join('&');
		    var url = this.serverlocation +'user/profile';

			var headers = new Headers();
			headers.append('Content-Type', 'application/x-www-form-urlencoded');

			return this.http.put(url, uiparams, {
				headers: headers
			});

	    }
	    this.getUserDetails = function() {		    	

        	this.student = SingletonService.getInstance().getStudent();
        	if(this.student.user_id){
        		var url = this.serverlocation +'user/profile?user_id='+this.student.user_id;
        	}
		    
		    return this.http.get(url).map(res => res.json());
	    }
	    this.getAllTimetable = function() {
			this.student = SingletonService.getInstance().getStudent();
        	if(this.student.student_id){
        		var url = this.serverlocation +'student/timetable?student_id='+this.student.student_id;
        	}
		    return this.http.get(url).map(res => res.json());
		}
		this.getExamDetails = function() {
			this.student = SingletonService.getInstance().getStudent();
        	if(this.student.student_id){
        		var url = this.serverlocation +'student/exam-schedule?exam_id=' + this.student.exam_id +'&student_id='+this.student.student_id;
        	}
			return this.http.get(url).map(res => res.json());
		}
		this.setExamType = function(exam_id) {
			SingletonService.getInstance().setExamType(exam_id);
		}
		this.getExamList = function() {
			this.student = SingletonService.getInstance().getStudent();
        	if(this.student.student_id){
        		var url = this.serverlocation +'student/exams?student_id='+this.student.student_id;
        	}
		    return this.http.get(url).map(res => res.json());
		}
		this.getMarks = function() {
			this.student = SingletonService.getInstance().getStudent();
        	if(this.student.student_id){
        		var url = this.serverlocation +'student/marks?exam_id=' + this.student.exam_id +'&student_id='+this.student.student_id;
        	}
			return this.http.get(url).map(res => res.json());
		}
		this.getAllMessage = function() {
			this.student = SingletonService.getInstance().getStudent();
        	if(this.student.student_id){
        		var url = this.serverlocation +'student/messages?student_id='+this.student.student_id;
        	}
		    return this.http.get(url).map(res => res.json());
		}
		this.getAllSubjects = function() {
			this.student = SingletonService.getInstance().getStudent();
        	if(this.student.student_id){
        		var url = this.serverlocation +'student/subjects?student_id='+this.student.student_id;
        	}
		    //var url = this.serverlocation + 'subjects.json';
		    return this.http.get(url).map(res => res.json());
		}
		this.showErrorMsg = function(msg) {
			console.log("ShowErrorMsg function");
			console.log(msg);
			if(msg._body){
				msg = JSON.parse(msg._body);
				msg = msg.message;
			}
			let alert = Alert.create({
		      title: 'Error',
		      body: msg,
		      buttons: ['Ok']
		    });
		    this.nav.present(alert);
		}
    }   
 
}