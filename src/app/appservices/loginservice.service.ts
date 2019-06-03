import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ErrorHandle } from './errorHandling';
import { retry, catchError } from 'rxjs/operators';
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class LoginService {


  public myDataServiceData: any = null;

  constructor(private http: HttpClient, private router: Router) {

  }
  getAllUser(): Observable<any> {
    let url = 'http://localhost:8080/user'
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get(url, httpOptions).pipe(catchError(this.errorHandle));
  }

  getUserById(userId: number): Observable<any> {
    return this.http.get('http://localhost:8080/user/' + userId)
  }

  createUser(postPayload): Observable<any> {
    let url = 'http://localhost:8080/user'
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(url, postPayload, httpOptions).pipe(catchError(ErrorHandle.errorHandle));
  }

  updateUser(putPayload): Observable<any> {
    return this.http.put('', putPayload)
  }


  errorHandle(errorMessage: HttpErrorResponse) {
    console.log('Error From Server : ', errorMessage);
    this.router.navigate(["./error"]);
    return throwError(errorMessage);

  }
}