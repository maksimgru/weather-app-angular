import { City } from "./city";

export class Profile {
    public profileName: string;
    public cities: City[]

    constructor(profileName: string, cities: City[]) {
        this.profileName = profileName;
        this.cities = cities;
    }
}