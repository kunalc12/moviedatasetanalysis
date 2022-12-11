import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerdictwiseComponent } from './verdictwise.component';

describe('VerdictwiseComponent', () => {
  let component: VerdictwiseComponent;
  let fixture: ComponentFixture<VerdictwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerdictwiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerdictwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
