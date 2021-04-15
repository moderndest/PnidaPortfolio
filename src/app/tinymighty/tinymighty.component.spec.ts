import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinymightyComponent } from './tinymighty.component';

describe('TinymightyComponent', () => {
  let component: TinymightyComponent;
  let fixture: ComponentFixture<TinymightyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinymightyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TinymightyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
