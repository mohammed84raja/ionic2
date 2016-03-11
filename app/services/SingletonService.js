export class SingletonService
{
    student:Object;
    static instance:SingletonService;
    static isCreating:Boolean = false;
    access_token: String;
    msgOffset: 0;
    pageSize: 0;
    examId : null;
 
    constructor() {
        if (!SingletonService.isCreating) {
            throw new Error("You can't call new in Singleton instances!");
        }
    }
 
    static getInstance() {
        if (SingletonService.instance == null) {
            SingletonService.isCreating = true;
            SingletonService.instance = new SingletonService();
            SingletonService.isCreating = false;
        }
 
        return SingletonService.instance;
    }
 
    setStudent(student:String) {
        this.student = student;
    }
    setExamType(examId:String) {
        this.examId = examId;
    }
    getExamType(examId:String) {
        return this.examId;
    }
    getStudent() {
        return this.student;
    }
    setOffset(offset) {
        return this.msgOffset = offset;
    }
    getOffset() {
        return this.msgOffset;
    }
    setAuthorization(auth) {
        this.access_token = auth;
    }
    getAuthorization() {
        return this.access_token;
    }
    setPageSize(size) {
        this.pageSize = size;
    }
    getPageSize() {
        return this.pageSize;
    }

}
 