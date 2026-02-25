import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomPlayerComponent } from './random-player.component';

describe('RandomPlayerComponent', () => {
  let component: RandomPlayerComponent;
  let fixture: ComponentFixture<RandomPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
