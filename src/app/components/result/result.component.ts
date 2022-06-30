import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Places } from 'src/app/models/places';
import { PlacesService } from 'src/app/services/places.service';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  currentPlace: Places = new Places();
  place_id: number;
  map: mapboxgl.Map;
  style = 'mapbox://styles/baleman95/cl507gouh000j14p79muhlav0';
  lat = 40.743433;
  lng = -73.988924;

  // 40.752615,-73.981484

  constructor(private actRoute: ActivatedRoute, private myPlacesService: PlacesService) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe(params => {
      this.place_id = +params["place_id"]
    })

    this.myPlacesService.getResult({ reqId: this.place_id }).subscribe(Response => {
      this.currentPlace = Response;
    })

    this.place_id = parseInt(this.actRoute.snapshot.paramMap.get("place_id"));
    console.log(this.place_id);

      (mapboxgl as any).accessToken = environment.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 11,
      center: [this.lng, this.lat]
    });
    
  }

  seeResult() {
    this.myPlacesService.getResult({ reqId: this.place_id }).subscribe(response => {
      console.log(response)
    })
  }
}

