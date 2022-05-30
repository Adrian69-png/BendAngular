import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import new_things from "./new_things.json";
import zones from './zones.json';
import { ZonesComponent } from 'D:/Angular/Bend/src/app/components/zones/zones.component';

@Component({
  selector: 'app-new-things',
  templateUrl: './new-things.component.html',
  styleUrls: ['./new-things.component.css']
})
export class NewThingsComponent implements OnInit {
  

  newThings:{id:number, areaId:number, joinedWith:any, sku:string, defaultSku:string, status:string, countActive:number}[] = new_things;
  zonesData:{areaId:number, name:string}[] = zones;
  
  
  
  constructor() {
    
   }
  
  ngOnInit(): void {
    
        
     
   }
  }


