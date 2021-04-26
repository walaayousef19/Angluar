import {catchError} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/Classes/product';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable ,throwError } from 'rxjs';

 


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  addProduct(product:Product): Observable<any> {
 console.log(product);
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(product);
 
    return this.http.post<Product>('http://localhost:2415/api/Product', product,{'headers':headers}) }
    returnAllProducts():Observable<Product[]>
    {
      return this.http.get<Product[]>('http://localhost:2415/api/Product').pipe(catchError((err)=>
      {
        return throwError(err.message ||"Internal Server error contact site adminstarator");
      }
      )
      );
    }

}
