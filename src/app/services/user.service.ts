import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  serverUserURL: string = "http://localhost:3000/users"

  //server request to login route

  loginUser(username: string, password: string): Observable<any>{
    return this.http.post(this.serverUserURL+"/login", {username, password});
  }

  //server request to profile route

  getUserProfile(): Observable<any>{
    return this.http.get(this.serverUserURL+"/profile");
  }

}
