import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Places } from 'src/app/models/places';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  currentPlace: Places = new Places();
  place_id: number;

  constructor(private actRoute: ActivatedRoute, private myPlacesService: PlacesService) { }

  ngOnInit(): void {
this.actRoute.params.subscribe(params => {
  this.place_id = +params["place_id"]
})

this.myPlacesService.getResult({ reqId: this.place_id }).subscribe(Response => {
  this.currentPlace = Response;
})

    this.place_id = parseInt(this.actRoute.snapshot.paramMap.get("place_id"));
    console.log(this.place_id)
  }

  seeResult(){
    this.myPlacesService.getResult({ reqId: this.place_id }).subscribe(response => {
      console.log(response)
    })
  }
  }

