import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAddFormComponent } from './content-add-form.component';

describe('ContentAddFormComponent', () => {
  let component: ContentAddFormComponent;
  let fixture: ComponentFixture<ContentAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
