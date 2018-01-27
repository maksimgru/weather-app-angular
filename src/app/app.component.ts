import { Component, VERSION } from '@angular/core';
import { NgForm } from '@angular/forms';

import { WeatherListComponent } from "./weather/list/weather-list.component";
import { WeatherItemComponent } from "./weather/item/weather-item.component";
import { WeatherSearchComponent } from "./weather/search/weather-search.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public title:string;
    constructor () {
        this.title = `Weather App Angular v${VERSION.full}`;
    }
}
