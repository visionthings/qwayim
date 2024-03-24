import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToReachCityComponent } from './how-to-reach-city.component';

describe('HowToReachCityComponent', () => {
  let component: HowToReachCityComponent;
  let fixture: ComponentFixture<HowToReachCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToReachCityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HowToReachCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
