import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockSevenComponent } from './block-seven.component';

describe('BlockSevenComponent', () => {
  let component: BlockSevenComponent;
  let fixture: ComponentFixture<BlockSevenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockSevenComponent]
    });
    fixture = TestBed.createComponent(BlockSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
