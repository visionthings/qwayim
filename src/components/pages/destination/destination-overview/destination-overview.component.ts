import {
  AfterContentInit,
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faLocation,
  faPhone,
  faLink,
  faComment,
  faEnvelope,
  faHeart,
  faMap,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faSnapchat,
} from '@fortawesome/free-brands-svg-icons';
import { CategoryComponent } from '../../city/category/category.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-destination-overview',
  standalone: true,
  imports: [FontAwesomeModule, CategoryComponent, RouterLink],
  templateUrl: './destination-overview.component.html',
  styleUrl: './destination-overview.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DestinationOverviewComponent implements OnChanges {
  @Input() destination: any = [];

  icons = {
    location: faLocation,
    phone: faPhone,
    link: faLink,
    comment: faComment,
    facebook: faFacebook,
    instagram: faInstagram,
    snapchat: faSnapchat,
    envelope: faEnvelope,
    heart: faHeart,
    map: faMap,
  };

  contactItems: any = [];
  socialmedia: any = [];

  ngOnChanges(): void {
    this.contactItems = [
      { id: 1, icon: this.icons.location, content: this.destination?.address },
      {
        id: 2,
        icon: this.icons?.phone,
        url: `tel:${this.destination?.contact?.phone}`,
        content: this.destination?.contact?.phone,
      },
      {
        id: 3,
        icon: this.icons?.link,
        url: this.destination?.contact?.website,
        content: this.destination?.contact?.website,
      },
      {
        id: 4,
        icon: this.icons?.envelope,
        url: `mailto:${this.destination?.contact?.email}`,
        content: this.destination?.contact?.email,
      },
    ];

    this.socialmedia = [
      {
        id: 1,
        icon: this.icons.facebook,
        url: this.destination?.contact.facebook,
      },
      {
        id: 2,
        icon: this.icons.instagram,
        url: this.destination?.contact.instagram,
      },
      {
        id: 3,
        icon: this.icons.snapchat,
        url: this.destination?.contact.snapchat,
      },
    ];
  }
}
