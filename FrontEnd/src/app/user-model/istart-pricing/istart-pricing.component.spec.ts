import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstartPricingComponent } from './istart-pricing.component';

describe('IstartPricingComponent', () => {
  let component: IstartPricingComponent;
  let fixture: ComponentFixture<IstartPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstartPricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstartPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
