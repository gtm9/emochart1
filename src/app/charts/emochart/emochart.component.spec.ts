import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmochartComponent } from './emochart.component';

describe('EmochartComponent', () => {
  let component: EmochartComponent;
  let fixture: ComponentFixture<EmochartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmochartComponent]
    });
    fixture = TestBed.createComponent(EmochartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
