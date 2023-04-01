import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TothemoonComponent } from './tothemoon.component';

describe('TothemoonComponent', () => {
  let component: TothemoonComponent;
  let fixture: ComponentFixture<TothemoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TothemoonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TothemoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
