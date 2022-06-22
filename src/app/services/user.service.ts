import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  myUserURL: string = "http://localhost:3000/users"

  //create a user
  
  createUser(newUser: User): Observable<any> {
    return this.http.post(this.myUserURL+"/"+"signup", newUser);
  }
  
  //server request to login route

  loginUser(username: string, password: string): Observable<any>{
    return this.http.post(this.myUserURL+"/login", {username, password});
  }

  //server request to profile route

  getUserProfile(): Observable<any> {
    let myHeaders = {
      Authorization: localStorage.getItem('hotspotsAppToken')
    }
    return this.http.get(this.myUserURL+'/profile', {headers: myHeaders });
  }

  //server request to logout route

  logoutUser(): Observable<any> {
  let myHeaders = {
    Authorization: localStorage.getItem('hotspotsAppToken')
  }
    return this.http.get(this.myUserURL+"/logout", {headers: myHeaders });
  }

  //server request to admin view all users route

  allUsers(): Observable<any> {
    let myHeaders = {
      Authorization: localStorage.getItem('hotspotsAppToken')
    }
      return this.http.get(this.myUserURL+"/admin/users", {headers: myHeaders });
  }

  //server request to admin view all users route

  allReviews(): Observable<any> {
    let myHeaders = {
      Authorization: localStorage.getItem('hotspotsAppToken')
    }
      return this.http.get(this.myUserURL+"/admin/reviews", {headers: myHeaders });
  }
  
}