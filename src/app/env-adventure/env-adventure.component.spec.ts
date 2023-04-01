import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvAdventureComponent } from './env-adventure.component';

describe('EnvAdventureComponent', () => {
  let component: EnvAdventureComponent;
  let fixture: ComponentFixture<EnvAdventureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvAdventureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvAdventureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
