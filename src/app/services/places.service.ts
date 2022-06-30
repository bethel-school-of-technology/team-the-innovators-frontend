import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Places } from '../models/places';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {


  constructor(private http: HttpClient) { }

  myPlacesURL: string = "http://localhost:3000/places"

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


  // getResult(reqId: number): Observable<any> {
  //   let myHeaders = {
  //     Authorization: localStorage.getItem('hotspotsAppToken')
  //   }
  //     return this.http.get(this.myPlacesURL+"/result/"+reqId, {headers: myHeaders });
  // }

}
