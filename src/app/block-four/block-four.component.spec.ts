import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockFourComponent } from './block-four.component';

describe('BlockFourComponent', () => {
  let component: BlockFourComponent;
  let fixture: ComponentFixture<BlockFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockFourComponent]
    });
    fixture = TestBed.createComponent(BlockFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
