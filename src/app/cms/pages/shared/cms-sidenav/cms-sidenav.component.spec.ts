import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsSidenavComponent } from './cms-sidenav.component';

describe('CmsSidenavComponent', () => {
  let component: CmsSidenavComponent;
  let fixture: ComponentFixture<CmsSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CmsSidenavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmsSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
