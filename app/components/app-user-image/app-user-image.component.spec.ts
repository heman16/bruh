import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUserImageComponent } from './app-user-image.component';

describe('AppUserImageComponent', () => {
  let component: AppUserImageComponent;
  let fixture: ComponentFixture<AppUserImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppUserImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppUserImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
