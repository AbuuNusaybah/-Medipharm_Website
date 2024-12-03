import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPageContentComponent } from './news-page-content.component';

describe('NewsPageContentComponent', () => {
  let component: NewsPageContentComponent;
  let fixture: ComponentFixture<NewsPageContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsPageContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
