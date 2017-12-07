import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { Profile } from "./profile";

@Injectable()
export class ProfileService {
    private profiles: Profile[] = [
        new Profile('Default Profile', ['New York', 'London', 'Berlin'])
    ];

    saveNewProfile(cities: string[]): Observable<any> {
        const profileName = 'Profile ' + (this.profiles.length);
        const profile = new Profile(profileName, cities);
        this.profiles.push(profile);
        return null;
    }

    getProfiles() {
        return this.profiles;
    }

    deleteProfile(profile: Profile): Observable<any> {
        this.profiles.splice(this.profiles.indexOf(profile), 1);
        return null;
    }
}