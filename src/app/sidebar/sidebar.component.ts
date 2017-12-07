import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { Profile } from "./../profile/profile";
import { ProfileService } from "./../profile/profile.service";
import { WeatherService } from "./../weather/weather.service";
import { WeatherItem } from "./../weather/weather-item";

@Component({
    selector: 'my-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    profiles:Profile[];

    constructor(private _profileService:ProfileService, private _weatherService:WeatherService) {}

    onSaveNewProfile() {
        const cities = this._weatherService.getWeatherItems().map(function (element) {
                return element.city;
            });
        this._profileService.saveNewProfile(cities);
    }

    onLoadProfile(profile: Profile):void {
        this._weatherService.clearWeatherItems();
        for (let i = 0; i < profile.cities.length; i++) {
            this._weatherService.searchWeatherInfo(profile.cities[i])
                //.retry()
                .subscribe(
                    data => {
                        let cityName: string = data.name + '(' + data.sys.country + ')';
                        let cityDescription: string = data.weather[0].main;
                        let cityTemperature: number = +data.main.temp_min;
                        const weatherItem = new WeatherItem(cityName, cityDescription, cityTemperature);
                        this._weatherService.addWeatherItem(weatherItem);
                    }
                );
        }
    }

    onDeleteProfile(event: any, profile: Profile):void {
        event.stopPropagation();
        this._profileService.deleteProfile(profile);
    }

    ngOnInit():any {
        this.profiles = this._profileService.getProfiles();
    }
}
