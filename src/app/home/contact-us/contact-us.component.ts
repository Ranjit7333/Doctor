import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule,GoogleMapsModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
 
  markers: any = [];
  center: google.maps.LatLngLiteral = {
    lat: 22.581610,
    lng: 88.462465
  };
  options: google.maps.MapOptions = {
  zoomControl: false,
  scrollwheel: true,
  disableDoubleClickZoom: false,
  maxZoom: 15,
  minZoom: 3,
  };
  zoom = 30;
   ngOnInit(): void {
     this.markers.push({
      position: {
        lat: 22.581610,
        lng: 88.462465
       },
      options: { animation: google.maps.Animation.BOUNCE },
   })
  }

}
