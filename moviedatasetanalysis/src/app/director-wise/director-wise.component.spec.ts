import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DirectorWiseComponent } from './director-wise.component';

describe('DirectorWiseComponent', () => {
  let component: DirectorWiseComponent;
  let fixture: ComponentFixture<DirectorWiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectorWiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectorWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
