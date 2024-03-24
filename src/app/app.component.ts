import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { NavbarComponent } from '../components/layouts/navbar/navbar.component';
import { FooterComponent } from '../components/layouts/footer/footer.component';

register();

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'قوائم';
}
