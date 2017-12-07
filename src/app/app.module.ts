import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherListComponent } from "./weather/weather-list.component";
import { WeatherItemComponent } from "./weather/weather-item.component";
import { WeatherSearchComponent } from "./weather/weather-search.component";
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
