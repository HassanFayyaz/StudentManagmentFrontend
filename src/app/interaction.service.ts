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
}
