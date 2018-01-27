export class WeatherItem {
    public city: string;
    public description: string;
    public temperature: number;
    public countryCode: string;

    constructor(city: string, description: string, temperature: number, countryCode?:string) {
        this.city = city;
        this.description = description;
        this.temperature = temperature;
        this.countryCode = countryCode;
    }
}