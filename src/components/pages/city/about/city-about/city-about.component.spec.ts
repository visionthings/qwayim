import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityAboutComponent } from './city-about.component';

describe('CityAboutComponent', () => {
  let component: CityAboutComponent;
  let fixture: ComponentFixture<CityAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CityAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
