import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityGalleryComponent } from './city-gallery.component';

describe('CityGalleryComponent', () => {
  let component: CityGalleryComponent;
  let fixture: ComponentFixture<CityGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CityGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
