import {catchError} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,throwError } from 'rxjs';
import { Wishlist } from 'src/app/Classes/WishList';
@Injectable({
  providedIn: 'root'
})
export class wishlistService {

  constructor(private http:HttpClient) { }
  url='http://localhost:2415/api/Wishlist';
  addWishlist(wishlist:Wishlist): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(wishlist);
 
    return this.http.post<Wishlist>(this.url, body,{headers:headers}) 
}
    
    returnAllWishlists():Observable<Wishlist[]>
    {
       return this.http.get<Wishlist[]>(this.url).pipe(catchError((err)=>
        {
        
          return throwError(err.message ||"Internal Server error contact site adminstarator");
        }));
    }
    updateWishlist(id:any,wishlist:Wishlist): Observable<Wishlist> {   
      return this.http.put<Wishlist>(this.url+'/'+id,wishlist).pipe(
        catchError((err)=>{
          console.log("erro ocuured")
          return throwError(err.message ||"Internal Server error contact site adminstarator");
          
        
        })
      ); 
  }
  deleteWishlist(id: number):Observable<number>{
    return this.http.delete<number>(this.url+'/'+id)
    .pipe(
      catchError( (err) => {
        return throwError(err.message ||"Error deleting travellers data.");
     }));
}
getWishlistById(id:any):Observable<Wishlist>
{
  return this.http.get<Wishlist>(this.url+'/'+id).pipe(catchError((err)=>
  {
  
    return throwError(err.message ||"Internal Server error contact site adminstarator");
  }));
}
}

