import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Review } from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  myUserURL: string = "http://localhost:3000/users"
  myReviewURL: string = "http://localhost:3000/reviews"

  //create a user

  createUser(newUser: User): Observable<any> {
    return this.http.post(this.myUserURL + "/" + "signup", newUser);
  }

  //server request to login route

  loginUser(Username: string, Password: string): Observable<any> {
    return this.http.post(this.myUserURL + "/login", { Username, Password });
  }

  //server request to profile route

  getUserProfile(): Observable<any> {
    let myHeaders = {
      Authorization: localStorage.getItem('hotspotsAppToken')
    }
    return this.http.get(this.myUserURL + '/profile', { headers: myHeaders });
  }

  //server request to logout route

  logoutUser(): Observable<any> {
    let myHeaders = {
      Authorization: localStorage.getItem('hotspotsAppToken')
    }
    return this.http.get(this.myUserURL + "/logout", { headers: myHeaders });
  }

  //server request to admin view all users route

  allUsers(): Observable<any> {
    let myHeaders = {
      Authorization: localStorage.getItem('hotspotsAppToken')
    }
    return this.http.get(this.myUserURL + "/admin/users", { headers: myHeaders });
  }

  //server request to admin view all reviews route

  allReviews(): Observable<any> {
    let myHeaders = {
      Authorization: localStorage.getItem('hotspotsAppToken')
    }
    return this.http.get(this.myReviewURL + "/admin/reviews", { headers: myHeaders });
  }

  //server request to admin delete user by id route

  deleteUser(deletedUserId: number): Observable<any> {
    let myHeaders = {
      Authorization: localStorage.getItem('hotspotsAppToken')
    }
    return this.http.delete(this.myUserURL + "/admin/users/" + deletedUserId, { headers: myHeaders });
  }

  //server request to admin delete review by id route

  deleteReview(deletedReviewId: number): Observable<any> {
    let myHeaders = {
      Authorization: localStorage.getItem('hotspotsAppToken')
    }
    return this.http.delete(this.myReviewURL + "/admin/reviews/" + deletedReviewId, { headers: myHeaders });
  }

  //server request to user view all reviews route

  userReviews(): Observable<any> {
    let myHeaders = {
      Authorization: localStorage.getItem('hotspotsAppToken')
    }
    return this.http.get(this.myReviewURL + "/user/reviews", { headers: myHeaders });
  }

  //server request to admin delete review by id route

  editReview(editedReviewId: number, editedReview: Review): Observable<any> {
    let myHeaders = {
      Authorization: localStorage.getItem('hotspotsAppToken')
    }
    return this.http.put(this.myReviewURL + "/editReview/" + editedReviewId, editedReview, { headers: myHeaders });
  }

  //server request to review by Id route

  reviewById(editedReviewId: number): Observable<any> {
    let myHeaders = {
      Authorization: localStorage.getItem('hotspotsAppToken')
    }
    return this.http.get(this.myReviewURL + "/review/" + editedReviewId, { headers: myHeaders });
  }

}