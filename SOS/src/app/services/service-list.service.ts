import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Supervisor } from '../models/supervisor-data';

@Injectable({
    providedIn: 'root'
  })

  export class ServiceList {
    supervisor_data: Subject<any> = new Subject();
    baseURL: String = "http://localhost:8888";

    constructor(private http: HttpClient) { }

    /* API to get supervisor details in home page */
    getSupervisorDetails(): Observable<Supervisor[]> {
    const url = `${this.baseURL}/getAllSupervisorDetails`;
    return this.http.get<Supervisor[]>(url).pipe(
      catchError(this.handleError)
    );
  }
  
  private handleError(error: HttpErrorResponse) {

    if (error.status == 404) {
      return throwError(error.error);
    }
    else if (error.status == 403) {
      return throwError("Access Denied");
    }
    else if (error.status == 401) {
      return throwError("Bad Request");
    }
    else if (error.status == 0) {
      return throwError('cannot connect to the server');
    }
    else if (error.status == 500) {
      return throwError('Internal Server Error');
    }
    else if (error.error instanceof ErrorEvent) {
      console.error("error occured: ", error.error.message);
    }
    return throwError('something bad happened: please try after sometime');
  }
  }