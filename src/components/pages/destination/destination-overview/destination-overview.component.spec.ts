import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationOverviewComponent } from './destination-overview.component';

describe('DestinationOverviewComponent', () => {
  let component: DestinationOverviewComponent;
  let fixture: ComponentFixture<DestinationOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinationOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DestinationOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
