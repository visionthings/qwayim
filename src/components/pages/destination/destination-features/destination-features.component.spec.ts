import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationFeaturesComponent } from './destination-features.component';

describe('DestinationFeaturesComponent', () => {
  let component: DestinationFeaturesComponent;
  let fixture: ComponentFixture<DestinationFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinationFeaturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DestinationFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
