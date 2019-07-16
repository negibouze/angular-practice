import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSearchResultTableComponent } from './content-search-result-table.component';

describe('ContentSearchResultTableComponent', () => {
  let component: ContentSearchResultTableComponent;
  let fixture: ComponentFixture<ContentSearchResultTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentSearchResultTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSearchResultTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
