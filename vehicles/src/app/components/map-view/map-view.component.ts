import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vehicle } from '../../models/vehicle.model';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';

@Component({
  selector: 'app-map-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit, AfterViewInit {
  @Input() vehicles: Vehicle[] = [];
  map: Map | undefined;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initializeMap();
    this.plotVehiclesOnMap();
  }

  initializeMap(): void {
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: fromLonLat([0, 0]),
        zoom: 2
      })
    });
  }

  plotVehiclesOnMap(): void {
    if (!this.map) return;

    const vectorSource = new VectorSource();

    this.vehicles.forEach((vehicle) => {
      const feature = new Feature({
        geometry: new Point(fromLonLat([vehicle.longitude, vehicle.latitude])),
        name: vehicle.vehicleName
      });

      feature.setStyle(
        new Style({
          image: new Icon({
            color: vehicle.color,
            crossOrigin: 'anonymous',
            src: 'https://openlayers.org/en/latest/examples/data/dot.png'
          })
        })
      );

      vectorSource.addFeature(feature);
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource
    });

    this.map.addLayer(vectorLayer);

    if (this.vehicles.length > 0) {
      const extent = vectorSource.getExtent();
      this.map.getView().fit(extent, { padding: [50, 50, 50, 50] });
    }
  }
}
