import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfternoonteaComponent } from './afternoontea.component';

describe('AfternoonteaComponent', () => {
  let component: AfternoonteaComponent;
  let fixture: ComponentFixture<AfternoonteaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfternoonteaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfternoonteaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
