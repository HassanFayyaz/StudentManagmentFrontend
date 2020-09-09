import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcourseweightComponent } from './addcourseweight.component';

describe('AddcourseweightComponent', () => {
  let component: AddcourseweightComponent;
  let fixture: ComponentFixture<AddcourseweightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcourseweightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcourseweightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
