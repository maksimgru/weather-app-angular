import { WeatherPage } from './app.po';

describe('weather App', () => {
  let page: WeatherPage;

  beforeEach(() => {
    page = new WeatherPage();
  });

  it('should display title saying Angular 2 Weather', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Angular 2 Weather');
  });
});
