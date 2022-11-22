import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FSectionComponent } from './f-section.component';

describe('FSectionComponent', () => {
  let component: FSectionComponent;
  let fixture: ComponentFixture<FSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
