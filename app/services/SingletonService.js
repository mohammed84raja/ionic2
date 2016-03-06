export class SingletonService
{
    student:Object;
    static instance:SingletonService;
    static isCreating:Boolean = false;
 
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
        this.student.exam_id = examId;
    }
    getStudent() {
        return this.student;
    }
}
 