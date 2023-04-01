import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvdashComponent } from './envdash.component';

describe('EnvdashComponent', () => {
  let component: EnvdashComponent;
  let fixture: ComponentFixture<EnvdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvdashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
