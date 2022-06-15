import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'users';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  myUserURL: string = "http://localhost:3000/users"

  constructor(private http: HttpClient) { }

  //create a user
  createUser(newUser: User) : Observable<Contact> {
    return this.http.post<Contact>(this.myUserURL, newUser)
  }

}
