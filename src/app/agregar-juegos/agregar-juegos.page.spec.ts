import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarJuegosPage } from './agregar-juegos.page';

describe('AgregarJuegosPage', () => {
  let component: AgregarJuegosPage;
  let fixture: ComponentFixture<AgregarJuegosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarJuegosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
