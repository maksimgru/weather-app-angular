export class WeatherItem {
    public city: string;
    public description: string;
    public temperature: number;

    constructor(city: string, description: string, temperature: number) {
        this.city = city;
        this.description = description;
        this.temperature = temperature;
    }
}