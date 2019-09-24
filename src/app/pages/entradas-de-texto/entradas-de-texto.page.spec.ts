import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradasDeTextoPage } from './entradas-de-texto.page';

describe('EntradasDeTextoPage', () => {
  let component: EntradasDeTextoPage;
  let fixture: ComponentFixture<EntradasDeTextoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntradasDeTextoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradasDeTextoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
