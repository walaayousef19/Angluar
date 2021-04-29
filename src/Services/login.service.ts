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
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'x-www-form-urlencoded'})};
    alert(username);
    var data = "grant_type=password&UserName=" +username + "&Password=" + password;
    return this.http.post('http://localhost:2415/login',data);
    } 
}