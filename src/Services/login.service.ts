import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


login(username: string, password: string): Observable<any> {
  alert('hh');
var data = "grant_type=password&username=" +username + "&password=" + password;
return this.http.post('http://localhost:2415/login',data).pipe(catchError((err)=>
{
  alert('failed');
  return throwError(err.message ||"Internal Server error contact site adminstarator");
}));  
}
  Login(data:any)
  {
alert(data.UserName);
console.log(data);
  const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'x-www-form-urlencoded'}
 
    )}
    var dataa = "grant_type=password&UserName=" +data.UserName + "&password=" + data.Password;
    return this.http.post('http://localhost:2415/login',data).pipe(catchError((err)=>
    {
      alert('failed');
      return throwError(err.message ||"Internal Server error contact site adminstarator");
    }));   
  }
}