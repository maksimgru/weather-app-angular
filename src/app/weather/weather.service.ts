import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { Observable } from "rxjs/Rx";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import {WeatherItem} from "./item/weather-item";
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

    deleteWeatherItem(item: WeatherItem): Observable<any> {
        WEATHER_ITEMS.splice(WEATHER_ITEMS.indexOf(item), 1);
        return null;
    }

    isExistWeatherItem(item: WeatherItem): any {
        return WEATHER_ITEMS.some(elem => (elem.city == item.city && elem.countryCode == item.countryCode));
    }

    searchWeatherInfo(city: string): Observable<any> {
        const APPID = '7a211c68435846ab04153a9d815b09f3';
        let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + APPID + '&units=metric';
        return this._http.get(url)
            .map(
                response => response.json()
            )
            .catch(
                error => {
                    return Observable.of<any>(error.json());
                }
            );
    }
}