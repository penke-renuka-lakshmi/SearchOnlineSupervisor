import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SignUp } from 'src/app/models/student-data'

@Injectable({
  providedIn: 'root'
})
export class APIService {
  base_url: string = 'http://localhost:8888/';

  constructor(private http: HttpClient) { }
  sign_up(body: SignUp): Observable<any> {
     return this.http.post(this.base_url + 'saveAllStudentDetails', body).pipe(map(res => res));
  }
  sign_in(body: SignUp): Observable<any> {
    return this.http.post(this.base_url + 'studentLogin', body).pipe(map(res => res));
 }
}
