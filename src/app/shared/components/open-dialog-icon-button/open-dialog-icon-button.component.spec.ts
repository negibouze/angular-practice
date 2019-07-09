import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenDialogIconButtonComponent } from './open-dialog-icon-button.component';

describe('OpenDialogIconButtonComponent', () => {
  let component: OpenDialogIconButtonComponent;
  let fixture: ComponentFixture<OpenDialogIconButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenDialogIconButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenDialogIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
