import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../home/header/header.component';
import { NavbarComponent } from '../../../layouts/navbar/navbar.component';
import { FooterComponent } from '../../../layouts/footer/footer.component';
import { UserService } from '../../../../services/user.service';
import { MainService } from '../../../../services/main.service';
import { faLocation, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    FontAwesomeModule,
  ],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent implements OnInit {
  constructor(
    private userService: UserService,
    private mainService: MainService
  ) {}

  icons = {
    location: faLocation,
    heart: faHeart,
    heartRegular: faHeartRegular,
  };

  categories: any = [];
  favorites: any = [];
  activeFavorites: any = [];

  // Set Active Category
  activeCategory: string | null = null;
  setActiveCategory(id: string) {
    this.activeCategory = id;
    const activeFavorites = this.favorites.filter((fav: any) => {
      return fav.place.category_id == id;
    });
    this.activeFavorites = activeFavorites;
  }

  // Remove from favorites
  removeFromFavorites(id: string) {
    this.userService.removeFromFavorites(id).subscribe({
      next: (res) => {
        let filteredFavs = this.activeFavorites.filter((fav: any) => {
          return fav.place.id !== id;
        });
        this.activeFavorites = filteredFavs;

        let token;
        if (typeof window !== 'undefined') {
          token = localStorage.getItem('token');
        }
        if (token) {
          this.userService.getFavorites(token).subscribe({
            next: (res: any) => {
              console.log(res.data);
              this.favorites = res.data;
            },
          });
        }
      },
    });
  }

  ngOnInit(): void {
    let token;
    if (typeof window !== 'undefined') {
      token = localStorage.getItem('token');
    }
    this.mainService.getCategories().subscribe({
      next: (res: any) => {
        console.log(res.data);

        this.categories = res.data;
      },
    });

    if (token) {
      this.userService.getFavorites(token).subscribe({
        next: (res: any) => {
          console.log(res.data);
          this.favorites = res.data;
        },
      });
    }
  }
}
