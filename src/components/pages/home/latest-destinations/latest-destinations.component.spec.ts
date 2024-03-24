import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestDestinationsComponent } from './latest-destinations.component';

describe('LatestDestinationsComponent', () => {
  let component: LatestDestinationsComponent;
  let fixture: ComponentFixture<LatestDestinationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestDestinationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LatestDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
