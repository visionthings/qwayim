import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CityAboutComponent } from './city-about/city-about.component';
import { CityGalleryComponent } from './city-gallery/city-gallery.component';
import { CityNewsComponent } from './city-news/city-news.component';
import { HowToReachCityComponent } from './how-to-reach-city/how-to-reach-city.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faTrain } from '@fortawesome/free-solid-svg-icons';
import { faTaxi } from '@fortawesome/free-solid-svg-icons';
import { faBus } from '@fortawesome/free-solid-svg-icons';
import { MainService } from '../../../../services/main.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CityAboutComponent,
    CityGalleryComponent,
    CityNewsComponent,
    HowToReachCityComponent,
    FontAwesomeModule,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AboutComponent {
  constructor(private mainService: MainService) {}
  @Input()
  set id(id: string) {
    this.mainService.getCity(id).subscribe({
      next: (res: any) => {
        this.cityImages = res.data[0]?.media.filter((media: any) => {
          return media.collection_name === 'city';
        });
        this.aboutCity = res.data[0].about;
        this.citySlug = res.data[0].slug;
        this.cityName = res.data[0].name;
        this.cityNews = res.data[0].news;
        this.howToReachCity = [
          {
            id: 1,
            icon: faPlane,
            title: 'الوصول بالطائرة',
            description: res.data[0].reach_by_plane,
          },
          {
            id: 2,
            icon: faTrain,
            title: 'الوصول بالقطار',
            description: res.data[0].reach_by_train,
          },
          {
            id: 3,
            icon: faTaxi,
            title: 'الوصول بالسيارة أو التاكسي',
            description: res.data[0].reach_by_car,
          },
          {
            id: 4,
            icon: faBus,
            title: 'الوصول بوسائل النقل العامة',
            description: res.data[0].reach_by_public_transport,
          },
        ];
      },
    });
  }
  cityImages: any = [];
  aboutCity: any = '';
  citySlug: any = '';
  cityName: any = '';
  cityNews: any = [];
  howToReachCity: any = [];
}
