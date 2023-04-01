import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhalecomingComponent } from './whalecoming.component';

describe('WhalecomingComponent', () => {
  let component: WhalecomingComponent;
  let fixture: ComponentFixture<WhalecomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhalecomingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhalecomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
