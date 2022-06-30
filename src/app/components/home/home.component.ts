import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/services/places.service';
import { Places } from 'src/app/models/places';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchedPlaces: any;
  public searchQuery: string;
  UserService: any;

  constructor(private placeService: PlacesService) { }

  ngOnInit(): void {

   
  }


  search() {
    this.placeService.searchPlace(this.searchQuery).subscribe(Response => {
      this.searchedPlaces = Response;
    })
  };

}