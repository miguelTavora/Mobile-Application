import { Component } from '@angular/core';
import { Map, latLng, tileLayer, Layer, marker, icon } from 'leaflet';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  map: Map;


  constructor() {}

  ngOnInit(): void {
    
  }

  ionViewDidEnter() {
    // In setView add latLng and zoom
    // tslint:disable-next-line:quotemark
    console.log("ionViewDidEnter" + this.map);
    this.map = new Map('mapId3').setView([38.757026, -9.1185779], 10);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a>',
    }).addTo(this.map);

    // tslint:disable-next-line:quotemark
    console.log("ionViewDidEnter" + this.map);
    this.leafletMap();
  }

  leafletMap() {
    var blackIcon = icon({
      iconUrl: "../assets/localization.png",

      iconSize: [45,45],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76]
    })

    marker([38.6112194,-8.9975813], {icon: blackIcon}).addTo(this.map)
      .bindPopup("Location of our market")
      .openPopup();
  }

}
