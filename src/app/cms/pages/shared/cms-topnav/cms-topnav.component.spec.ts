import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsTopnavComponent } from './cms-topnav.component';

describe('CmsTopnavComponent', () => {
  let component: CmsTopnavComponent;
  let fixture: ComponentFixture<CmsTopnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CmsTopnavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmsTopnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
