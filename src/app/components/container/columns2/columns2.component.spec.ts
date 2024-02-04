import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Columns2Component } from './columns2.component';

describe('Columns2Component', () => {
  let component: Columns2Component;
  let fixture: ComponentFixture<Columns2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Columns2Component]
    });
    fixture = TestBed.createComponent(Columns2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
