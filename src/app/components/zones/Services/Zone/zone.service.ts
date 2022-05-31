import { Injectable } from '@angular/core';
import { Zone } from 'D:/Angular/Bend/src/app/components/zones/Models/Zone';
@Injectable({
  providedIn: 'root'
})
export class ZoneService {
  getZones(list:Zone[]):Zone[]{
    return list;
  }
  constructor() { }
}
