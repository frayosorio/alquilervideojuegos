import { Component, OnInit } from '@angular/core';

import { TituloService } from '../../servicios/titulo.service';
import { EmpresaService } from '../../servicios/empresa.service';
import { HttpClient } from '@angular/common/http';

import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';

import { VentanaModalService } from '../../ventana-modal';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html'
})
export class TituloComponent implements OnInit {

  public titulos;
  public empresas;

  public columnas: any;

  public modoColumna = ColumnMode;
  public tipoSeleccion = SelectionType;
  public tituloSeleccion;
  public tituloEdicion;

  //public filas: any;

  constructor(private tituloService: TituloService,
    private empresaService: EmpresaService,
    private http: HttpClient,
    private ventanaModalService: VentanaModalService) {
    this.columnas = [
      { name: 'nombre' },
      { name: 'año' },
      { name: 'protagonistas' },
      { name: 'productor' },
      { name: 'director' },
      { name: 'idEmpresa' },
      { name: 'precio' }
    ];

    this.titulos = [];

  }

  ngOnInit() {
    this.listar();
  }

  public listar() {
    this.tituloService.obtenerTitulos()
      .subscribe(dataT => {
        this.titulos = dataT;
      }
      );
    this.empresaService.obtenerEmpresas()
      .subscribe(dataE => {
        this.empresas = dataE;
        //window.alert(this.empresas[2].nombre);
      }
      );
  }

  onActivate(event) {
    if (event.type == 'click') {
      this.tituloSeleccion = event.row;
    }
  }

  abrirVentanaModal(id: string) {
    this.ventanaModalService.abrir(id);
  }

  cerrarVentanaModal(id: string) {
    this.ventanaModalService.cerrar(id);
  }

  public nuevo() {
    this.tituloEdicion = {
      id: -1,
      nombre: "",
      año: new Date().getFullYear(),
      protagonistas: "",
      productor: "",
      director: "",
      idempresa: 0,
      precio: 0
    };
    this.abrirVentanaModal('modalModificar');
  }

  public modificar() {
    if (this.tituloSeleccion != null && this.tituloSeleccion.id >= 0) {
      this.tituloEdicion = this.tituloSeleccion;
      this.abrirVentanaModal('modalModificar');
    }
  }

  public verificarEliminar() {
    if (this.tituloSeleccion != null && this.tituloSeleccion.id >= 0) {
      this.abrirVentanaModal('modalEliminar');
    }
  }

  public guardar(id: string) {
    this.tituloService.guardarTitulo(this.tituloEdicion);
    this.ventanaModalService.cerrar(id);
  }

  public eliminar(id: string) {
    this.tituloService.eliminarTitulo(this.tituloSeleccion.id);
    this.ventanaModalService.cerrar(id);
  }

}
