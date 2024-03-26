import {
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
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { CategoryComponent } from '../../city/category/category.component';
import { RouterLink } from '@angular/router';
import { UserService } from '../../../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-destination-overview',
  standalone: true,
  imports: [FontAwesomeModule, CategoryComponent, RouterLink, CommonModule],
  templateUrl: './destination-overview.component.html',
  styleUrl: './destination-overview.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DestinationOverviewComponent implements OnChanges, OnInit {
  constructor(private userService: UserService) {}
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
    regularHeart: regularHeart,
  };

  contactItems: any = [];
  socialmedia: any = [];
  favoritesIDs: any = [];
  favoritesIDsComplete: boolean = false;

  // Add and remove from favorites
  addToFavorites(id: string) {
    this.userService.addToFavorites(id).subscribe({
      next: () => {
        this.favoritesIDsComplete = false;
        this.favoritesIDs.push(id);
        this.favoritesIDsComplete = true;
      },
    });
  }
  removeFromFavorites(id: string) {
    let filteredFavoritesIDs = this.favoritesIDs.filter((item: any) => {
      return item != id;
    });
    this.userService.removeFromFavorites(id).subscribe({
      next: () => {
        this.favoritesIDsComplete = false;

        console.log('id:' + id, this.favoritesIDs);

        this.favoritesIDs = filteredFavoritesIDs;
        this.favoritesIDsComplete = true;
      },
    });
  }

  ngOnChanges(): void {
    // Contact and social media items
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

  ngOnInit(): void {
    // Get user favorites
    let token;
    if (typeof window !== 'undefined') {
      token = localStorage.getItem('token');
    }
    if (token) {
      this.userService.getFavorites(token).subscribe({
        next: (res: any) => {
          for (const item of res.data) {
            this.favoritesIDs.push(item.place_id);
          }
        },
        error: (e) => {
          console.log(e);
        },
        complete: () => {
          this.favoritesIDsComplete = true;
        },
      });
    }
  }
}
