import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  AfterContentInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import Swiper from 'swiper';
import { MainService } from '../../../../../services/main.service';

@Component({
  selector: 'app-city-gallery',
  standalone: true,
  imports: [NgOptimizedImage, FontAwesomeModule, CommonModule],
  templateUrl: './city-gallery.component.html',
  styleUrl: './city-gallery.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CityGalleryComponent implements OnInit, AfterContentInit {
  constructor(private mainService: MainService) {}

  cityImages: any = [];
  citySlug: any = '';
  cameraIcon = faCamera;

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.citySlug = window.localStorage.getItem('citySlug');
      let slug = window.localStorage.getItem('citySlug');
      if (slug) {
        this.mainService.getCity(slug).subscribe({
          next: (res: any) => {
            let images = res.data[0].media.filter((media: any) => {
              return media.collection_name === 'city';
            });
            this.cityImages = images;
            this.cityImages.push(images[0]);
            this.cityImages.push(images[1]);
          },
        });
      }
    }
  }
  ngAfterContentInit(): void {}
}
