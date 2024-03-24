import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(private http: HttpClient) {}
  endpoint = environment.endpoint;

  // Cities
  getAllCities() {
    return this.http.get(`${this.endpoint}/cities`);
  }
  getCity(id: string) {
    return this.http.get(`${this.endpoint}/cities/${id}`);
  }

  // Categories
  getCategories() {
    return this.http.get(`${this.endpoint}/categories`);
  }

  // Destinations
  getLatestDestinations() {
    return this.http.get(`${this.endpoint}/top/places`);
  }
  getCityDestinations(cityID: any, catID: any, pageNumber: number) {
    return this.http.get(
      `${this.endpoint}/categories/${cityID}/${catID}?page=${pageNumber}`
    );
  }
  getFilteredCityDestinations(
    cityID: any,
    catID: any,
    pageNumber: number,
    filters: any
  ) {
    return this.http.post(
      `${this.endpoint}/categories/${cityID}/${catID}?page=${pageNumber}`,
      { filters: filters }
    );
  }
  getDestination(id: string) {
    return this.http.get(`${this.endpoint}/places/${id}`);
  }
  getDestinationComments(id: string | null) {
    return this.http.get(`${this.endpoint}/place-comments/${id}`);
  }
  getDestinationQuestions(id: string | null) {
    return this.http.get(`${this.endpoint}/place-questions/${id}`);
  }
  searchDestination(keyword: string | null) {
    return this.http.get(`${this.endpoint}/places/search?keyword=${keyword}`);
  }
}
