import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWorkWidgetComponent } from './how-work-widget.component';

describe('HowWorkWidgetComponent', () => {
  let component: HowWorkWidgetComponent;
  let fixture: ComponentFixture<HowWorkWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowWorkWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowWorkWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
