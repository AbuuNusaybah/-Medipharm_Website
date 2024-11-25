import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporalTwoComponent } from './temporal-two.component';

describe('TemporalTwoComponent', () => {
  let component: TemporalTwoComponent;
  let fixture: ComponentFixture<TemporalTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemporalTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemporalTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
