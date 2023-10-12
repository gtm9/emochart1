import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsCanvasComponent } from './analytics-canvas.component';

describe('AnalyticsCanvasComponent', () => {
  let component: AnalyticsCanvasComponent;
  let fixture: ComponentFixture<AnalyticsCanvasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalyticsCanvasComponent]
    });
    fixture = TestBed.createComponent(AnalyticsCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
