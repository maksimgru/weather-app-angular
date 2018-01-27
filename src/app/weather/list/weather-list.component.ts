import { Component, OnInit } from "@angular/core";

import { WeatherService } from "../weather.service";
import { WeatherItem } from "../item/weather-item";

@Component({
    selector: 'weather-list',
    templateUrl: './weather-list.component.html',
    styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {
    weatherItems: WeatherItem[];

    constructor(private _weatherService: WeatherService) {}

    ngOnInit():any {
        this.weatherItems = this._weatherService.getWeatherItems();
    }
}