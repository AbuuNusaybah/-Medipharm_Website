import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreBusinessComponent } from './core-business.component';

describe('CoreBusinessComponent', () => {
  let component: CoreBusinessComponent;
  let fixture: ComponentFixture<CoreBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoreBusinessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
