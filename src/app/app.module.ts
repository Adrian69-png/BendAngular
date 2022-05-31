import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZonesComponent } from './components/zones/zones.component';
import { ZoneService } from './components/zones/Services/Zone/zone.service';
import { NewThingsService } from './components/zones/Services/NewThings/new-things.service';
@NgModule({
  declarations: [
    AppComponent,
    ZonesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ZoneService,
    NewThingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
