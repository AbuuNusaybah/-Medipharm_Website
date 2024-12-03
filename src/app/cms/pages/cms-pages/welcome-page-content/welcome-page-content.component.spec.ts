import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePageContentComponent } from './welcome-page-content.component';

describe('WelcomePageContentComponent', () => {
  let component: WelcomePageContentComponent;
  let fixture: ComponentFixture<WelcomePageContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WelcomePageContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomePageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
