import { Injectable } from '@angular/core';
import { NewThings } from '../../Models/NewThings';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewThingsService {

  getNewThings(list:NewThings[]): Observable<NewThings[]>{

    return of(list);

  }

  getCartByZone(zone: number, newThings:NewThings[]) {

    //const zones = newThings.map(({ areaId }) => areaId);
    var display_things: NewThings[] = [];

    for (var i in newThings) {
      if (newThings[i].areaId == zone) {
        display_things[i] = newThings[i];
 
      }
    }
    return display_things;
  }

  //return only null cart by joinedWith key
  getNullCart(list: NewThings[]) {
    var null_zones: NewThings[] = [];
    for (var i in list) {
      if (list[i].joinedWith == null) {
        null_zones.push(list[i]);
      }
    }
    return null_zones;
  }

  getSortedCarts(list: NewThings[], list2: NewThings[]) {
    var sorted_zones: NewThings[] = [];
    for (var i in list) {
      sorted_zones.push(list[i]);

      for (var j in list2) {
        if (list2[j].joinedWith == list[i].id) {
          sorted_zones.push(list2[j]);
        }
      }
    }
    return sorted_zones;
  }

  getChain(value: NewThings, list: NewThings[]) {
    var chain_list: NewThings[] = [];
    if (value.joinedWith == null) {
      chain_list.push(value);
      for (var i in list) {
        if (list[i].joinedWith == value.id) {
          chain_list.push(list[i]);
        }
      }

    }
    return chain_list;
  }


  constructor() { }
}
