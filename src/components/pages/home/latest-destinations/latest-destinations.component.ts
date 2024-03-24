import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../../services/main.service';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faComment,
  faEye,
  faLocationPin,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-latest-destinations',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './latest-destinations.component.html',
  styleUrl: './latest-destinations.component.scss',
})
export class LatestDestinationsComponent implements OnInit {
  constructor(private mainService: MainService) {}
  icons = {
    rate: faStar,
    location: faLocationPin,
    comment: faComment,
    views: faEye,
  };
  categories: any = [];
  ngOnInit(): void {
    this.mainService.getLatestDestinations().subscribe({
      next: (res: any) => {
        let categories = res.data;
        for (const cat of categories) {
          for (const place of cat.places) {
            let fullRate = 0;
            let rate = 0;
            for (let comment of place.comments) {
              rate += Number(comment.rate);
              fullRate += 5;
            }
            if (fullRate !== 0) {
              place['final_rate'] = (((rate / fullRate) * 100) / 10).toFixed(1);
            } else {
              place['final_rate'] = 0;
            }
          }
          this.categories.push(cat);
        }
      },
    });
  }
}
