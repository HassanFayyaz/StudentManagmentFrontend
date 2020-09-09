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
  private deletCourseURL=environment.baseUrl+"api/course/";
  private getCourseByIdURL=environment.baseUrl+"api/course/"
  private postStudentURL=environment.baseUrl+"api/student/";
  private getStudentURL=environment.baseUrl+"api/student/";
  private updateStudentURL=environment.baseUrl+"api/student/";
  private deleteStudentURL=environment.baseUrl+"api/student/";
  private getStudentByIdURL=environment.baseUrl+"api/student/"
  private postGradeURL=environment.baseUrl+"api/grades/";
  private getGradeURL=environment.baseUrl+"api/grades/";
  private updateGradeURL=environment.baseUrl+"api/grades/";
  private deleteGradeURL=environment.baseUrl+"api/grades/";
  private getGradeByIdURL=environment.baseUrl+"api/grades/"
  private poststudentURL=environment.baseUrl+"api/student/add";
  private getstudentURL=environment.baseUrl+"api/student/getAll";
  private updatestudentURL=environment.baseUrl+"api/student/update/";
  private deletestudentURL=environment.baseUrl+"api/student/delete/";
  


  constructor(private http:HttpClient) { }

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
  public getGrades():Observable<any>{
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
  
 
  
 
}
