import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeographComponent } from './geograph.component';

describe('GeographComponent', () => {
  let component: GeographComponent;
  let fixture: ComponentFixture<GeographComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeographComponent]
    });
    fixture = TestBed.createComponent(GeographComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
