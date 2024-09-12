import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Opcion1Component } from './opcion1.component';

describe('Opcion1Component', () => {
  let component: Opcion1Component;
  let fixture: ComponentFixture<Opcion1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Opcion1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Opcion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
