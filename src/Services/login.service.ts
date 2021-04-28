import { HttpClient, HttpHeaders } from '@angular/common/http';
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
   // let authorizationData = 'Basic ' + btoa(data.UserName + ':' + data.Password+ ':'+data.grant_type);
alert(data.UserName);
console.log(data);
  const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'x-www-form-urlencoded',

    'Authorization': 'Basic'+btoa(JSON.stringify(data))})
};
    return this.http.post('http://localhost:2415/login',httpOptions).pipe(catchError((err)=>
    {
      alert('failed');
      return throwError(err.message ||"Internal Server error contact site adminstarator");
    }));
    
  }
}