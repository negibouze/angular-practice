import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSearchFormComponent } from './content-search-form.component';

describe('ContentSearchFormComponent', () => {
  let component: ContentSearchFormComponent;
  let fixture: ComponentFixture<ContentSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
