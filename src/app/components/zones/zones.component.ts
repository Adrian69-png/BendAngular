import { Component, OnInit } from '@angular/core';
import zones from './zones.json';
@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css']
})
export class ZonesComponent implements OnInit {


  zonesData:{areaId:number, name:string}[] = zones;
  
  
  constructor() {
    console.log();

   }

  ngOnInit(): void {
  }

}
