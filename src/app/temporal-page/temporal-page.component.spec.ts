import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporalPageComponent } from './temporal-page.component';

describe('TemporalPageComponent', () => {
  let component: TemporalPageComponent;
  let fixture: ComponentFixture<TemporalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemporalPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemporalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
