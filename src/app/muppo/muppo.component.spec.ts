import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuppoComponent } from './muppo.component';

describe('MuppoComponent', () => {
  let component: MuppoComponent;
  let fixture: ComponentFixture<MuppoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuppoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuppoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
