import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartPaypalComponent } from './shopping-cart-paypal.component';

describe('ShoppingCartPaypalComponent', () => {
  let component: ShoppingCartPaypalComponent;
  let fixture: ComponentFixture<ShoppingCartPaypalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartPaypalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartPaypalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
