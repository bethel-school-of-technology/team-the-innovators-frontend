import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Places } from '../models/places';
import { Review } from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {


  constructor(private http: HttpClient) { }

  myPlacesURL: string = "http://localhost:3000/places"
  myReviewURL: string = "http://localhost:3000/reviews"

  // search all places
  getAllResults (): Observable<Places[]>{
    return this.http.get<Places[]>(this.myPlacesURL)
  };

  // // Get one place
  // getResult(reqId: number): Observable<Places>{
  //    return this.http.get<Places>(`${this.myPlacesURL}/${reqId}`)
  // } 


  getResult({ reqId }: { reqId: number; }): Observable<Places> {
    let myHeaders = {
      Authorization: localStorage.getItem('hotspotsAppToken')
    }
    return this.http.get<Places>(`${this.myPlacesURL}/${reqId}`, {headers: myHeaders });
  };

  searchPlace(reqQuery: string): Observable<any> {
    let myHeaders = {
      Authorization: localStorage.getItem('hotspotsAppToken')
    }
    return this.http.get(`${this.myPlacesURL}/search/${reqQuery}`, {headers: myHeaders });
  }; 

//server request to get reviews by place id
placeReview(reqId: number): Observable<any> {
  let myHeaders = {
    Authorization: localStorage.getItem('hotspotsAppToken')
  }
  return this.http.get(`${this.myReviewURL}/place/${reqId}`, { headers: myHeaders });
};

//create review
createReview(newReview: Review, place_id: number): Observable<any> {
  let myHeaders = {
    Authorization: localStorage.getItem('hotspotsAppToken')
  }
  return this.http.post(`${this.myReviewURL}/createReview/${place_id}`, newReview, { headers: myHeaders });
}

}