import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Vehicle } from '../models/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private apiUrl = 'https://mobi.connectedcar360.net/api';

  constructor(private http: HttpClient) {}

  getVehicleByUserId(userId: string): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${this.apiUrl}/?op=getlocations&userid=${userId}`, { responseType: 'json' })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `A client-side error occurred: ${error.error.message}`;
    } else {
      // Server-side error
      if (error.status === 200 && error.error.text) {
        // Handle non-JSON response
        errorMessage = `Server error: ${error.error.text}`;
      } else {
        errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
      }
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}