import { Routes } from '@angular/router';
import { HomeComponent } from '../components/pages/home/home.component';
import { CityComponent } from '../components/pages/city/city.component';
import { DestinationComponent } from '../components/pages/destination/destination.component';
import { AccountsComponent } from '../components/pages/accounts/accounts.component';
import { LoginComponent } from '../components/pages/accounts/login/login.component';
import { RegisterComponent } from '../components/pages/accounts/register/register.component';
import { DefaultLayoutComponent } from '../components/layouts/default-layout/default-layout.component';
import { AboutComponent } from '../components/pages/city/about/about.component';
import { CategoryComponent } from '../components/pages/city/category/category.component';
import { ProfileComponent } from '../components/pages/accounts/profile/profile.component';
import { FavoritesComponent } from '../components/pages/accounts/favorites/favorites.component';
import { SearchResultsComponent } from '../components/pages/search-results/search-results.component';
import { searchGuard } from '../guards/search.guard';
import { NotificationsComponent } from '../components/pages/accounts/notifications/notifications.component';

export const routes: Routes = [
  {
    path: 'accounts',
    component: AccountsComponent,
    pathMatch: 'prefix',
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'register', component: RegisterComponent, title: 'التسجيل' },
      { path: 'login', component: LoginComponent, title: 'تسجيل الدخول' },
      { path: 'profile', component: ProfileComponent, title: 'الملف الشخصي' },
      { path: 'favorites', component: FavoritesComponent },
      { path: 'notifications', component: NotificationsComponent },
    ],
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    pathMatch: 'prefix',
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: 'city/:id',
        component: CityComponent,
        pathMatch: 'prefix',
        children: [
          { path: '', redirectTo: 'about', pathMatch: 'full' },
          { path: 'about/:id', component: AboutComponent },
          { path: 'category/:id', component: CategoryComponent },
        ],
      },
      { path: 'destination/:id', component: DestinationComponent },

      // Search results
      {
        path: 'results',
        component: SearchResultsComponent,
        canActivate: [searchGuard],
      },
    ],
  },
];
