import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeUsComponent } from './like-us.component';

describe('LikeUsComponent', () => {
  let component: LikeUsComponent;
  let fixture: ComponentFixture<LikeUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikeUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
