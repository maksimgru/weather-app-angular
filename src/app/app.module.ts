import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherListComponent } from "./weather/list/weather-list.component";
import { WeatherItemComponent } from "./weather/item/weather-item.component";
import { WeatherSearchComponent } from "./weather/search/weather-search.component";
import { WeatherService } from "./weather/weather.service";
import { TemperatureDirective } from "./weather/temperature.directive";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ProfileService } from "./profile/profile.service";

@NgModule({
  declarations: [
    AppComponent,
    WeatherListComponent,
    WeatherItemComponent,
    WeatherSearchComponent,
    SidebarComponent,
    TemperatureDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ProfileService,
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
