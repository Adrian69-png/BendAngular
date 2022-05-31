import { Injectable } from '@angular/core';
import { Zone } from 'D:/Angular/Bend/src/app/components/zones/Models/Zone';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  getZones(list:Zone[]): Observable<Zone[]>{
    return of(list);
  }
  constructor() { }
}
