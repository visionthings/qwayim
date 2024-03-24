import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { MainService } from '../../../../services/main.service';
import { WeatherService } from '../../../../services/weather.service';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeaderComponent implements OnInit {
  constructor(
    private mainService: MainService,
    private weatherService: WeatherService
  ) {}
  cities: any = [];
  // Icons
  windIcon = faWind;
  clockIcon = faClock;
  calendarIcon = faCalendar;

  // Social media icons
  socialMediaIcons = [
    { id: 1, icon: faFacebook, path: '' },
    { id: 2, icon: faTwitter, path: '' },
    { id: 3, icon: faYoutube, path: '' },
  ];

  isLoading = true;

  ngOnInit(): void {
    this.mainService.getAllCities().subscribe({
      next: (res: any) => {
        for (const city of res.data) {
          this.weatherService.getCityWeather(city.slug).subscribe({
            next: (res: any) => {
              let cityData = {
                name: city.name,
                background: city.media[0].original_url,
                condition_text: res.current.condition.text,
                condition_icon: res.current.condition.icon,
                temp: res.current.temp_c,
                wind_kph: res.current.wind_kph,
                date: res.location.localtime.slice(0, 10),
                time: res.location.localtime.slice(10, 16),
                is_day: res.current.is_day,
              };
              this.cities.push(cityData);
            },
            complete: () => {
              this.isLoading = false;
            },
          });
        }
      },
    });
  }
}
