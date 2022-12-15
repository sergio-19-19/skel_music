import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Router } from '@angular/router';
import { ViewChild, ElementRef } from '@angular/core';

// declaracion de variables y interface
declare var google: any;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}


@Component({
  selector: 'app-sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss'],
})
export class SportsPage implements OnInit {

  map = null;

  constructor(private router: Router) {}
 // on init ciclo de vida del ionic

  // funcion para volver a padre menu
  backmenus(){
    this.router.navigateByUrl("/menu")
  }

  ngOnInit() {
    this.loadMap();
  }
// funcion loadmap que permite cargar el mapa de geolocalizacion 
  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat: -33.3633738227, lng: -70.6780193136 };
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      const marker = {
        position: {
          lat: -33.363373822,
          lng: -70.6780193136
      },
      title: 'punto uno'
    };
    this.addMarker(marker);
    });
  }


  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
});
}
}




