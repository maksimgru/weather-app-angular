import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import {WeatherItem} from "./weather-item";
import {WEATHER_ITEMS} from "./mock-weather";

@Injectable()
export class WeatherService {

    constructor(private _http: Http) {}

    getWeatherItems() {
        return WEATHER_ITEMS;
    }
    
    addWeatherItem(item: WeatherItem) {
        WEATHER_ITEMS.push(item);
    }
    
    clearWeatherItems() {
        WEATHER_ITEMS.splice(0);
    }

    searchWeatherInfo(city: string): Observable<any> {
        return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=7a211c68435846ab04153a9d815b09f3&units=metric')
            .map(
                response => response.json()
            );
            /*.catch(
                error => {
                    console.error(error);
                    return Observable.throw(error.json().error);
                }
            );*/
    }
}