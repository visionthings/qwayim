import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getCityWeather(city: string) {
    const headers = new HttpHeaders({
      key: '8bcf91708f1d411b93252821241102',
    });
    return this.http.post(
      `https://api.weatherapi.com/v1/current.json?q=${city}&&lang=ar`,

      {
        key: '8bcf91708f1d411b93252821241102',
        aqi: 'yes',
      },
      { headers: headers }
    );
  }
}
