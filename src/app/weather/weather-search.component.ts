import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs/Subject";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { WeatherService } from "./weather.service";
import { WeatherItem } from "./weather-item";

@Component({
    selector: 'weather-search',
    templateUrl: './weather-search.component.html',
    styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {
    private searchStream = new Subject<string>();
    data:any = {};

    constructor(private _weatherService:WeatherService) {
    }

    onSearchLocation(value:string) {
        console.log(value);
        this.searchStream
            .next(value);
    }

    onSubmit() {
        let cityName: string = this.data.name + '(' + this.data.sys.country + ')';
        let cityDescription: string = this.data.weather[0].main;
        let cityTemperature: number = 1*this.data.main.temp_min;
        const newItem = new WeatherItem(cityName, cityDescription, cityTemperature);
        this._weatherService.addWeatherItem(newItem);
    }

    ngOnInit():any {
        this.searchStream
            .debounceTime(1000)
            .distinctUntilChanged()
            .switchMap((term:string) => this._weatherService.searchWeatherInfo(term))
            .subscribe(
                data => this.data = data
            );
    }
}