import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { LatestDestinationsComponent } from './latest-destinations/latest-destinations.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, LatestDestinationsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
