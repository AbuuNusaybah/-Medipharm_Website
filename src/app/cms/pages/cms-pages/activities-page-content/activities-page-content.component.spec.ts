import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesPageContentComponent } from './activities-page-content.component';

describe('ActivitiesPageContentComponent', () => {
  let component: ActivitiesPageContentComponent;
  let fixture: ComponentFixture<ActivitiesPageContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActivitiesPageContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitiesPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
