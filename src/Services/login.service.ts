import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  Login(data:any)
  {
    return this.http.post('http://localhost:2415/login',data).pipe(catchError((err)=>
    {
    
      return throwError(err.message ||"Internal Server error contact site adminstarator");
    }));
    
  }
}
