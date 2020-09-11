import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
   
  private postCourseURL=environment.baseUrl+"api/courses/";
  private getcourseURL=environment.baseUrl+"api/courses/";
  private updatecourseURL=environment.baseUrl+"api/courses/";
  private deletCourseURL=environment.baseUrl+"api/courses/";
  private getCourseByIdURL=environment.baseUrl+"api/courses/"
  private postStudentURL=environment.baseUrl+"api/student/add";
  private getStudentURL=environment.baseUrl+"api/student/getAll";
  private updateStudentURL=environment.baseUrl+"api/student/update/";
  private deleteStudentURL=environment.baseUrl+"api/student/delete/";
  private getStudentByIdURL=environment.baseUrl+"api/student/"
  private postGradeURL=environment.baseUrl+"api/grades/add";
  private getGradeURL=environment.baseUrl+"api/grades/getAll";
  private updateGradeURL=environment.baseUrl+"api/grades/update/";
  private deleteGradeURL=environment.baseUrl+"api/grades/delete/";
  private getGradeByIdURL=environment.baseUrl+"api/grades/"

  private loginuserURL=environment.baseUrl+"token/generate-token";


  constructor(private http:HttpClient) { }
  
  public loginuser(login:Object):Observable<any>{
    return this.http.post(this.loginuserURL,login);
  }

  public addCourse(addcourse: object): Observable<any> {
    return this.http.post(this.postCourseURL, addcourse);
  }
  public getAllCourse():Observable<any> {
    return this.http.get(this.getcourseURL);
  }
  public updateCourse(id:any,updateCourse:Object):Observable<any>{
    return this.http.put(this.updatecourseURL+id,updateCourse);
  }
  public deletecourse(id:any):Observable<any>{
    return this.http.delete(this.deletCourseURL+id);
  }
  public getCourseById(id:any):Observable<any>{
    return this.http.get(this.getCourseByIdURL+id);
  }
  public postStudent(postStd:Object):Observable<any>{
    return this.http.post(this.postStudentURL,postStd);
  }
  public getAllStudents():Observable<any>{
    return this.http.get(this.getStudentURL);
  }
  public updateStudent(id:any,updateStd:Object):Observable<any>{
   return this.http.put(this.updateStudentURL+id,updateStd);
  }
  public deleteStudent(id:any):Observable<any>{
    return this.http.delete(this.deleteStudentURL+id);
  }
  public getStudentById(id:any):Observable<any>{
    return this.http.get(this.getStudentByIdURL+id);
  }
  public postGrade(postGrade:Object):Observable<any>{
    return this.http.post(this.postGradeURL,postGrade);
  }
  public getAllGrades():Observable<any>{
    return this.http.get(this.getGradeURL);
  }
  public updateGrades(id:any,updateGrade:Object):Observable<any>{
    return this.http.put(this.updateGradeURL+id,updateGrade);
  }
  public deleteGrade(id:any):Observable<any>{
    return this.http.delete(this.deleteGradeURL+id);
  }
  public getGradeById(id:any):Observable<any>{
    return this.http.get(this.getGradeByIdURL+id);
  }
  
  loggedIn(){
    return !!sessionStorage.getItem('token')
  }

  studentRole():boolean{
    if(sessionStorage.getItem('role') == 'student'){
      return true;
    }
    else{
      return false;
    }
  }

  teacherRole():boolean{
    if(sessionStorage.getItem('role') == 'teacher'){
      return true;
    }
    else{
      return false;
    }
  }
 
  
 
}
