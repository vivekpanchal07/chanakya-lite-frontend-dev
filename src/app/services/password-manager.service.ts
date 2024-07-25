import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Password } from '../models/password';

@Injectable({
  providedIn: 'root'
})
export class PasswordManagerService {
  private apiUrl = 'http://localhost:3000/passwords';
  private passwords: Password[] = [
    { _id: '1', name: 'Facebook', website: 'facebook.com', username: 'john.doe', password: 'myfacebookpassword' },
    { _id: '2', name: 'Google', website: 'google.com', username: 'john.doe', password: 'mygooglepassword' },
    { _id: '3', name: 'Amazon', website: 'amazon.com', username: 'john.doe', password: 'myamazonpassword' },
  ];
  private nextId = 4;
  constructor(private http: HttpClient) {}
  
  getPasswords(): Observable<Password[]> {
    // For now, return demo data
    return of(this.passwords);
  }

  addPassword(newPassword: Password): Observable<Password> {
    // Use a better method to generate a unique ID (like MongoDB's ObjectId)
    newPassword._id = this.generateUniqueId(); 
    this.passwords.push(newPassword);
    return of(newPassword);
  }

  deletePassword(id: string): Observable<any> {
    const index = this.passwords.findIndex(password => password._id === id);
    if (index !== -1) {
      const deletedPassword = this.passwords.splice(index, 1)[0];
      return of(deletedPassword);
    } else {
      return of(null); // Return null if the password was not found
    }
  }
  
  private generateUniqueId(): string {
    return (this.nextId++).toString();
  }
}
