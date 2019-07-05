import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementSearchComponent } from './element-search.component';

describe('ElementSearchComponent', () => {
  let component: ElementSearchComponent;
  let fixture: ComponentFixture<ElementSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
