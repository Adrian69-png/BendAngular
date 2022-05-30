import { Component, OnInit } from '@angular/core';
import new_things from "./new_things.json";
import zones from './zones.json';
import { NewThingsComponent } from 'D:/Angular/Bend/src/app/components/new-things/new-things.component';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css']
})
export class ZonesComponent  implements OnInit {


  newThings:{id:number, areaId:number, joinedWith:any, sku:string, defaultSku:string, status:string, countActive:number}[] = new_things;
  zonesData:{areaId:number, name:string}[] = zones;

  
  display(zone:number){
    
    const zones = this.newThings.map(({ areaId }) => areaId);
    var display_things:{id:number, areaId:number, joinedWith:any, sku:string, defaultSku:string, status:string, countActive:number}[] = [];

    var list:any= [];
    var pos = 0;
   
     pos = 0;
     
    
    for (var i in this.newThings){
      if(this.newThings[i].areaId == zone){
          display_things[pos] = this.newThings[i];
          pos++;
      }
    }

    

    
    return display_things; 
    
  }

  get_null_zones(list:any[]){
    var null_zones:any = [];
    for (var i in list){
      if (list[i].joinedWith == null){
        null_zones.push(list[i]);
      
      }
    }
    return null_zones
  }

  get_sorted_zones(list:any[], list2:any[]){
    var sorted_zones:any = [];
    for (var i in list){

      sorted_zones.push(list[i]);

      for(var j in list2){
        if(list2[j].joinedWith == list[i].id){
            sorted_zones.push(list2[j]);
        } 
      }
    }

    
    return sorted_zones;

  }

  get_chain(value:any, list:any[]){
    var chain_list:any = [];
      if(value.joinedWith == null){
        chain_list.push(value);
        for (var i in list){
          if(list[i].joinedWith == value.id){
            chain_list.push(list[i]);
          }
        }
        
      }
      return chain_list;
  }
 
  constructor() {
    
   }

  ngOnInit(): void {
  }

}
