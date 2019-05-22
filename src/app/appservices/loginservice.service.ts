import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {


  public myDataServiceData: any = null;

  constructor(private http: HttpClient) {

  }
  getAllUser(): Observable<any> {
    let url = 'http://localhost:8080/user'
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get(url, httpOptions);
  }

  getUserById(userId: number): Observable<any> {
    return this.http.get('http://localhost:8080/user/'+userId)
  }

  createUser(postPayload): Observable<any> {
    let url = 'http://localhost:8080/user'
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(url,postPayload , httpOptions)
  }

  updateUser(putPayload): Observable<any> {
    return this.http.put('', putPayload)
  }




}
