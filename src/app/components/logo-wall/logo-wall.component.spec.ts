import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoWallComponent } from './logo-wall.component';

describe('LogoWallComponent', () => {
  let component: LogoWallComponent;
  let fixture: ComponentFixture<LogoWallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoWallComponent]
    });
    fixture = TestBed.createComponent(LogoWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
