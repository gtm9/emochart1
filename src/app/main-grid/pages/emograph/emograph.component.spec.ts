import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmographComponent } from './emograph.component';

describe('EmographComponent', () => {
  let component: EmographComponent;
  let fixture: ComponentFixture<EmographComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmographComponent]
    });
    fixture = TestBed.createComponent(EmographComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
