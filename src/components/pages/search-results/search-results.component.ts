import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../services/main.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart, faLocation } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { UserService } from '../../../services/user.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterLink],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
})
export class SearchResultsComponent implements OnInit {
  constructor(
    private mainService: MainService,
    private userService: UserService
  ) {}
  icons = {
    regularHeart: faHeartRegular,
    heart: faHeart,
    location: faLocation,
  };
  destinations: any = undefined;

  // Favorites
  favoritesIDs: any = [];
  favoritesIDsComplete: boolean = false;

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
  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const keyword = localStorage.getItem('search');
      this.mainService.searchDestination(keyword).subscribe({
        next: (res: any) => {
          this.destinations = res.data;
          localStorage.removeItem('search');
        },
      });
    }
  }
}
