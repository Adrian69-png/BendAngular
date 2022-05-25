import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZonesComponent } from './components/zones/zones.component';
import { NewThingsComponent } from './components/new-things/new-things.component';

@NgModule({
  declarations: [
    AppComponent,
    ZonesComponent,
    NewThingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
