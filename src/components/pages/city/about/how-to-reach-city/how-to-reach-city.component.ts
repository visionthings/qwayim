import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faTrain } from '@fortawesome/free-solid-svg-icons';
import { faTaxi } from '@fortawesome/free-solid-svg-icons';
import { faBus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-how-to-reach-city',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './how-to-reach-city.component.html',
  styleUrl: './how-to-reach-city.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HowToReachCityComponent {
  @Input() howToReachCity: any = {};
}
