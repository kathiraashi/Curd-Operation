import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const API_URL = 'http://localhost:4000/API/CurdOperation/';

@Injectable({
  providedIn: 'root'
})
export class CurdService {

   constructor(private http: Http) { }

   public Create(data: any): Observable<any[]> {
      return this.http.post(API_URL + 'Create', data)
      .pipe( map(response => response), catchError(error => of(error)) );
   }

   public List(): Observable<any[]> {
      return this.http.get(API_URL + 'List')
      .pipe( map(response => response), catchError(error => of(error)) );
   }

   public Update(data: any): Observable<any[]> {
      return this.http.post(API_URL + 'Update', data)
      .pipe( map(response => response), catchError(error => of(error)) );
   }

   public Delete(User_Id: any): Observable<any[]> {
      return this.http.get(API_URL + 'Delete/' + User_Id)
      .pipe( map(response => response), catchError(error => of(error)) );
   }

}
