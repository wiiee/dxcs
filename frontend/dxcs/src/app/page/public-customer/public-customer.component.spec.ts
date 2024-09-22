import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicCustomerComponent } from './public-customer.component';

describe('PublicCustomerComponent', () => {
  let component: PublicCustomerComponent;
  let fixture: ComponentFixture<PublicCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicCustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
