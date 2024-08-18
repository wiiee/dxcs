import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCustomerComponent } from './my-customer.component';

describe('MyCustomerComponent', () => {
  let component: MyCustomerComponent;
  let fixture: ComponentFixture<MyCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
