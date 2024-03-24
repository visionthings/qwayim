import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-header',
  standalone: true,
  imports: [NgOptimizedImage, ReactiveFormsModule],
  templateUrl: './city-header.component.html',
  styleUrl: './city-header.component.scss',
})
export class CityHeaderComponent {
  constructor(private fb: FormBuilder, private router: Router) {}
  @Input() headerImage = 'assets/images/alexbeaches.jpg';

  // Seach Form
  searchForm = this.fb.group({ search: '' });
  get search() {
    return this.searchForm.controls['search'];
  }
  submitSearch() {
    if (
      typeof window !== 'undefined' &&
      this.searchForm.controls.search.value
    ) {
      localStorage.setItem('search', this.searchForm.controls.search.value);
    }
    this.router.navigateByUrl('/results');
  }
}
