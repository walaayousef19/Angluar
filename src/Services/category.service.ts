import {catchError} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,throwError } from 'rxjs';
import { Category } from 'src/app/Classes/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  url='http://localhost:2415/api/Category';
  addCategory(category:Category): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(category);
 
    return this.http.post<Category>(this.url, body,{headers:headers}) 
}
    
    returnAllCategory():Observable<Category[]>
    {
        return this.http.get<Category[]>(this.url).pipe(catchError((err)=>
        {
          return throwError(err.message ||"Internal Server error contact site adminstarator");
        }));
    }
    updateCategory(category:Category): Observable<any> {
      const headers = { 'content-type': 'application/json'}  
   
      const body=JSON.stringify(category);
   
      return this.http.put<Category>(this.url, body,{headers:headers}) 
  }
}

