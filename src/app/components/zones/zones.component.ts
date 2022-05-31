import { Component, OnInit } from '@angular/core';
import new_things from "./new_things.json";
import zones from './zones.json';
import { Zone } from './Models/Zone';
import { NewThings } from './Models/NewThings';
import { ZoneService } from './Services/Zone/zone.service';
import { NewThingsService } from './Services/NewThings/new-things.service';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css']
})

export class ZonesComponent implements OnInit {

  zonesData: Zone[] = [];
  newThings: NewThings[] = [];

  //return only null cart by joinedWith key
  getNullCart(list: NewThings[]) {
    return this.newThingsService.getNullCart(list);
  }

  //sorts carts by joined value

  getSortedCarts(list: NewThings[], list2: NewThings[]) {
    return this.newThingsService.getSortedCarts(list, list2);
  }

  //returns a list of carts by first one' id
  getChain(value: NewThings, list: NewThings[]) {
    
    return this.newThingsService.getChain(value, list);
  }

  //initialize list of zones by model
  getZones(){
    this.zoneServices.getZones(zones).subscribe(zones => {this.zonesData = zones});
  }

  //initialize list of new things by model
  getNewThings(){
   this.newThingsService.getNewThings(new_things).subscribe(newThings => {this.newThings = newThings});
  }

  //return carts by given zone value
  getCartByZone(zone: number) {
    return  this.newThingsService.getCartByZone(zone, this.newThings);
  }


  ngOnInit(): void {
    this.getZones();
    this.getNewThings();
  }
  
  constructor( private zoneServices: ZoneService, private newThingsService:NewThingsService) {
    
    
  }

  

}
