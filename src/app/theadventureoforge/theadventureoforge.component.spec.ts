import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheadventureoforgeComponent } from './theadventureoforge.component';

describe('TheadventureoforgeComponent', () => {
  let component: TheadventureoforgeComponent;
  let fixture: ComponentFixture<TheadventureoforgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheadventureoforgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheadventureoforgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
