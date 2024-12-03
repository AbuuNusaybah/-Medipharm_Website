import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsPaginatedTableComponent } from './cms-paginated-table.component';

describe('CmsPaginatedTableComponent', () => {
  let component: CmsPaginatedTableComponent;
  let fixture: ComponentFixture<CmsPaginatedTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CmsPaginatedTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmsPaginatedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
