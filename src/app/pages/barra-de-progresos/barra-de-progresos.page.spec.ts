import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraDeProgresosPage } from './barra-de-progresos.page';

describe('BarraDeProgresosPage', () => {
  let component: BarraDeProgresosPage;
  let fixture: ComponentFixture<BarraDeProgresosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraDeProgresosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraDeProgresosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
