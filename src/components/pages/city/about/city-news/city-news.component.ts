import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-city-news',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './city-news.component.html',
  styleUrl: './city-news.component.scss',
})
export class CityNewsComponent {
  @Input() cityNews: any = [];
  @Input() cityName: any = '';
}
