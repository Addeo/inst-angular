import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockFiveComponent } from './block-five.component';

describe('BlockFiveComponent', () => {
  let component: BlockFiveComponent;
  let fixture: ComponentFixture<BlockFiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockFiveComponent]
    });
    fixture = TestBed.createComponent(BlockFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
