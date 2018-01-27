import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { WeatherListComponent } from "./weather/list/weather-list.component";
import { WeatherItemComponent } from "./weather/item/weather-item.component";
import { WeatherSearchComponent } from "./weather/search/weather-search.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

import { TemperatureDirective } from "./weather/temperature.directive";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        WeatherListComponent,
        WeatherItemComponent,
        WeatherSearchComponent,
        SidebarComponent,
        TemperatureDirective
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular 2 Weather App');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Angular 2 Weather App');
  }));
});
