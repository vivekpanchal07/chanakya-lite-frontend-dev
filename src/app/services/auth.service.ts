import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://29cf11c4-e2b3-4d28-9ac5-5b7149492b24-00-1qvn5wzd88vxa.pike.replit.dev/api';
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient, private router: Router, @Inject(DOCUMENT) public document: Document) {
    const token = this.getJwtToken();
    this.isLoggedInSubject.next(!!token);
  }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/users/login`, credentials).pipe(
      map(response => {
        (this.document.defaultView as Window).localStorage?.setItem('jwtToken', response.token);
        this.isLoggedInSubject.next(true);
        return response;
      }),
      catchError(this.handleError)
    );
  }

  signup(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, userData).pipe(
      map(response => {
        (this.document.defaultView as Window).localStorage?.setItem('jwtToken', response.token);
        return response;
      }),
      catchError(this.handleError)
    );
  }

  isLoggedIn(): boolean {
    if((this.document.defaultView as Window).localStorage?.getItem('jwtToken')){
      return true;
    }
    return false;
  }

  logout() {
    (this.document.defaultView as Window).localStorage?.removeItem('jwtToken');
    this.isLoggedInSubject.next(false);
    this.router.navigate(['/login']);
  }

  getJwtToken(): string | null {
    return (this.document.defaultView as Window).localStorage?.getItem('jwtToken');
  }

  private getAuthHeaders(): HttpHeaders {
    const token = this.getJwtToken();
    if (token) {
      return new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    } else {
      return new HttpHeaders();
    }
  }

  private handleError(error: any): Observable<never> {
    let errorMessage = 'An error occurred.';
    if (error.error && error.error.message) {
      errorMessage = error.error.message;
    } else if (error.status) {
      errorMessage = `HTTP Error ${error.status}: ${error.statusText}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
