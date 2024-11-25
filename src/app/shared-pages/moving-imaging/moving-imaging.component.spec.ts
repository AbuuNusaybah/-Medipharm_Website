import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingImagingComponent } from './moving-imaging.component';

describe('MovingImagingComponent', () => {
  let component: MovingImagingComponent;
  let fixture: ComponentFixture<MovingImagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovingImagingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovingImagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
