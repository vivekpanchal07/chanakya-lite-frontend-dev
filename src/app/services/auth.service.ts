import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private router: Router) {}

  login(credentials: any) {
    // Your actual authentication logic here 
    // (e.g., using a database or external service)
    // ...

    // Example: Simulate login
    if (credentials.username === 'admin' && credentials.password === 'admin') {
      this.isLoggedInSubject.next(true);
      this.router.navigate(['/', 'pass']);
    } else {
      console.error('Invalid credentials');
    }
  }

  logout() {
    this.isLoggedInSubject.next(false);
    this.router.navigate(['sign-in']);
  }
}
