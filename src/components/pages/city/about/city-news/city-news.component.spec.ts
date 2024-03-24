import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityNewsComponent } from './city-news.component';

describe('CityNewsComponent', () => {
  let component: CityNewsComponent;
  let fixture: ComponentFixture<CityNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityNewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CityNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
