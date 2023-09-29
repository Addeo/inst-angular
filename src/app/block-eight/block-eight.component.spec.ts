import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockEightComponent } from './block-eight.component';

describe('BlockEightComponent', () => {
  let component: BlockEightComponent;
  let fixture: ComponentFixture<BlockEightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockEightComponent]
    });
    fixture = TestBed.createComponent(BlockEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
