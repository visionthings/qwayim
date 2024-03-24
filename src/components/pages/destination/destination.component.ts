import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { DestinationOverviewComponent } from './destination-overview/destination-overview.component';
import { DestinationFeaturesComponent } from './destination-features/destination-features.component';
import {
  faPlane,
  faTrain,
  faTaxi,
  faBus,
} from '@fortawesome/free-solid-svg-icons';
import { HowToReachCityComponent } from '../city/about/how-to-reach-city/how-to-reach-city.component';
import { DestinationReviewsComponent } from './destination-reviews/destination-reviews.component';
import { MainService } from '../../../services/main.service';
@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [
    DestinationOverviewComponent,
    DestinationFeaturesComponent,
    HowToReachCityComponent,
    DestinationReviewsComponent,
  ],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.scss',
})
export class DestinationComponent implements OnChanges, OnInit {
  constructor(private main: MainService) {}
  @Input() id: string = '';
  destination: any = undefined;
  howToReachCity: any = [];
  ngOnChanges(changes: SimpleChanges): void {
    this.main.getDestination(this.id).subscribe({
      next: (res: any) => {
        this.destination = res.data;

        this.howToReachCity = [
          {
            id: 1,
            icon: faPlane,
            title: 'الوصول بالطائرة',
            description: res.data.reach_by_plane,
          },
          {
            id: 2,
            icon: faTrain,
            title: 'الوصول بالقطار',
            description: res.data.reach_by_train,
          },
          {
            id: 3,
            icon: faTaxi,
            title: 'الوصول بالسيارة أو التاكسي',
            description: res.data.reach_by_car,
          },
          {
            id: 4,
            icon: faBus,
            title: 'الوصول بوسائل النقل العامة',
            description: res.data.reach_by_public_transport,
          },
        ];
      },
    });
  }

  ngOnInit(): void {
    this.main.getDestination(this.id).subscribe({
      next: (res: any) => {
        this.destination = res.data;

        this.howToReachCity = [
          {
            id: 1,
            icon: faPlane,
            title: 'الوصول بالطائرة',
            description: res.data.reach_by_plane,
          },
          {
            id: 2,
            icon: faTrain,
            title: 'الوصول بالقطار',
            description: res.data.reach_by_train,
          },
          {
            id: 3,
            icon: faTaxi,
            title: 'الوصول بالسيارة أو التاكسي',
            description: res.data.reach_by_car,
          },
          {
            id: 4,
            icon: faBus,
            title: 'الوصول بوسائل النقل العامة',
            description: res.data.reach_by_public_transport,
          },
        ];
      },
    });
  }
}
