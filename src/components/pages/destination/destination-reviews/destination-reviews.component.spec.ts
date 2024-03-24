import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationReviewsComponent } from './destination-reviews.component';

describe('DestinationReviewsComponent', () => {
  let component: DestinationReviewsComponent;
  let fixture: ComponentFixture<DestinationReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinationReviewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DestinationReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
