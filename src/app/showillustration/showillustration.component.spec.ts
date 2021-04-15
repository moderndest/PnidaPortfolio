import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowillustrationComponent } from './showillustration.component';

describe('ShowillustrationComponent', () => {
  let component: ShowillustrationComponent;
  let fixture: ComponentFixture<ShowillustrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowillustrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowillustrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
