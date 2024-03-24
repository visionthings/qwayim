import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CityHeaderComponent } from './about/city-header/city-header.component';
import { CategoriesComponent } from './categories/categories.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainService } from '../../../services/main.service';

@Component({
  selector: 'app-city',
  standalone: true,
  imports: [
    CityHeaderComponent,
    CategoriesComponent,
    FontAwesomeModule,
    NgOptimizedImage,
    RouterOutlet,
  ],
  templateUrl: './city.component.html',
  styleUrl: './city.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CityComponent implements OnInit {
  constructor(private mainService: MainService) {}
  cityImages: any = [];
  citySlug: any = '';
  cityName: any = '';

  @Input() set id(citySlug: string) {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('citySlug', citySlug);
    }
    this.mainService.getCity(citySlug).subscribe({
      next: (res: any) => {
        this.cityImages = res.data[0].media.filter((media: any) => {
          return media.collection_name === 'city';
        });
        this.citySlug = res.data[0].slug;
        this.cityName = res.data[0].name;
      },
      error: (err) => {},
    });
  }

  ngOnInit(): void {}
}
