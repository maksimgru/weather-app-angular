export class Profile {
    public profileName: string;
    public cities: string[]

    constructor(profileName: string, cities: string[]) {
        this.profileName = profileName;
        this.cities = cities;
    }
}