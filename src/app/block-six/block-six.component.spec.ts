import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockSixComponent } from './block-six.component';

describe('BlockSixComponent', () => {
  let component: BlockSixComponent;
  let fixture: ComponentFixture<BlockSixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockSixComponent]
    });
    fixture = TestBed.createComponent(BlockSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
