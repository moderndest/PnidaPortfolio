import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BountybrawlComponent } from './bountybrawl.component';

describe('BountybrawlComponent', () => {
  let component: BountybrawlComponent;
  let fixture: ComponentFixture<BountybrawlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BountybrawlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BountybrawlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
