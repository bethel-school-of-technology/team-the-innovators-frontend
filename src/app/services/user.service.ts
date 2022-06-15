import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private Http: HttpClient) { }

  serverUserURL: string = "http://localhost:3000/users"

  //server request to login route

  loginUser(username: string, password: string): Observable<any>{
    return this.Http.post(this.serverUserURL+"/login", {username, password});
  }

  //server request to profile route

  getUserProfile(): Observable<any> {
    let myHeaders = {
      Authorization: localStorage.getItem('hotspotsAppToken')
    }
    return this.Http.get(this.serverUserURL+'/profile', {headers: myHeaders});
  }

}





// return this.Http.post(this.serverUserURL+"/login", {username, password}, {responseType: 'text'});

