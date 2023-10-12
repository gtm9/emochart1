import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionDetailsComponent } from './emotion-details.component';

describe('EmotionDetailsComponent', () => {
  let component: EmotionDetailsComponent;
  let fixture: ComponentFixture<EmotionDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmotionDetailsComponent]
    });
    fixture = TestBed.createComponent(EmotionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
