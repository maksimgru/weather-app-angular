export class City {
    public cityName: string;
    public countryCode: string;

    constructor(cityName: string, countryCode?: string) {
        this.cityName = cityName;
        this.countryCode = countryCode;
    }
}