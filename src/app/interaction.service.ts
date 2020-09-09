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
  private deleteURL=environment.baseUrl+"api/course/";
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
    return this.http.delete(this.deleteURL+id);
  }
  public addStudent(addstudent:Object):Observable<any>{
    return this.http.post(this.poststudentURL, addstudent);
  }
  public getAllStudent():Observable<any> {
    return this.http.get(this.getstudentURL);
  }
  public updateStudent(id:any,addstudent:Object):Observable<any>{
    return this.http.put(this.updatecourseURL+id,addstudent);
  }
  public deletestudent(id:any):Observable<any>{
    return this.http.delete(this.deleteURL+id);
  }



}
