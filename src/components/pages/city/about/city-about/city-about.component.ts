import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import { WeatherService } from '../../../../../services/weather.service';
import { first } from 'rxjs';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-city-about',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './city-about.component.html',
  styleUrl: './city-about.component.scss',
})
export class CityAboutComponent implements OnChanges {
  constructor(private weather: WeatherService) {}
  @Input() aboutCity = '';
  @Input() citySlug = '';
  @Input() cityName = '';

  // Weather data
  datetime = [];
  weatherIcon = '';
  weatherText = '';
  temprature = '';
  windKPH = '';

  // Icons
  windIcon = faWind;
  clockIcon = faClock;
  calendarIcon = faCalendar;

  ngOnChanges(): void {
    if (this.citySlug) {
      this.weather
        .getCityWeather(this.citySlug)
        .pipe(first())
        .subscribe({
          next: (res: any) => {
            this.datetime = res.location.localtime.split(' ');
            this.weatherIcon = res.current.condition.icon;
            this.weatherText = res.current.condition.text;
            this.temprature = res.current.temp_c;
            this.windKPH = res.current.wind_kph;
          },
          error: (err: any) => {},
        });
    }
  }
}
