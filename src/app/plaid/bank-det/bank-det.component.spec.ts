import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankDetComponent } from './bank-det.component';

describe('BankDetComponent', () => {
  let component: BankDetComponent;
  let fixture: ComponentFixture<BankDetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankDetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
