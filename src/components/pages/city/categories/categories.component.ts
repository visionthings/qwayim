import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { first } from 'rxjs';
import { MainService } from '../../../../services/main.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, RouterLink, RouterLinkActive],
})
export class CategoriesComponent implements OnInit, OnChanges {
  constructor(private mainService: MainService) {}
  @Input() citySlug: string = '';
  @Input() cityName: string = '';
  categories: any = [];
  start = false;
  aboutPath = '';
  baseUrl = '';
  currentCategory = `نبذة عامة عن المدينة`;

  setCurrentCat(categoryName: string) {
    this.currentCategory = `قائمة بأفضل ${categoryName} الموجودة في مدينة ${this.cityName}`;
  }
  resetCurrentCat() {
    this.currentCategory = `نبذة عامة عن المدينة`;
  }

  ngOnInit(): void {
    this.mainService.getCategories().subscribe({
      next: (res: any) => {
        const resCopy = [...res.data].reverse();
        this.categories = resCopy;
      },
      complete: () => {
        this.start = true;
      },
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.aboutPath = `/city/${this.citySlug.toLowerCase()}/about/${this.citySlug.toLowerCase()}`;
    this.baseUrl = `/city/${this.citySlug.toLowerCase()}/category/`;

    this.mainService
      .getCategories()
      .pipe(first())
      .subscribe({
        next: (res: any) => {
          const resCopy = [...res.data].reverse();
          this.categories = resCopy;
        },
        complete: () => {
          this.start = true;
        },
      });
  }
}
