import {catchError} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,throwError } from 'rxjs';
import { Review } from 'src/app/Classes/Review';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  url='http://localhost:2415/api/Review';
  addReview(review:Review): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(review);
 
    return this.http.post<Review>(this.url, body,{headers:headers}) 
}
    
    returnAllReviews():Observable<Review[]>
    {
       return this.http.get<Review[]>(this.url).pipe(catchError((err)=>
        {
        
          return throwError(err.message ||"Internal Server error contact site adminstarator");
        }));
    }
    updateReview(id:any,review:Review): Observable<Review> {   
      return this.http.put<Review>(this.url+'/'+id,review).pipe(
        catchError((err)=>{
          console.log("erro ocuured")
          return throwError(err.message ||"Internal Server error contact site adminstarator");
          
        
        })
      ); 
  }
  deleteReview(id: number):Observable<number>{
    return this.http.delete<number>(this.url+'/'+id)
    .pipe(
      catchError( (err) => {
        return throwError(err.message ||"Error deleting travellers data.");
     }));
}
getReviewById(id:any):Observable<Review>
{
  return this.http.get<Review>(this.url+'/'+id).pipe(catchError((err)=>
  {
  
    return throwError(err.message ||"Internal Server error contact site adminstarator");
  }));
}
}

