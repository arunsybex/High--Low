import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBrokerComponent } from './check-broker.component';

describe('CheckBrokerComponent', () => {
  let component: CheckBrokerComponent;
  let fixture: ComponentFixture<CheckBrokerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckBrokerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckBrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
