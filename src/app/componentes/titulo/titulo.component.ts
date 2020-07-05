import { Component, OnInit } from '@angular/core';

import { TituloService } from '../../servicios/titulo.service';
import { HttpClient } from '@angular/common/http';

import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';

import { VentanaModalService } from '../../ventana-modal';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html'
})
export class TituloComponent implements OnInit {

  public titulos;

  public columnas: any;

  public modoColumna = ColumnMode;
  public tipoSeleccion = SelectionType;
  public titulo;

  //public filas: any;

  constructor(private tituloService: TituloService,
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

    this.titulos=[];

  }

  ngOnInit() {
    this.listar();
  }

  public listar() {
    this.tituloService.obtenerTitulos()
      .subscribe(data => {
        this.titulos = data;
        window.alert(this.titulos[2].nombre);
      }
      );
  }

  onSelect({ seleccion }) {
    this.titulo = seleccion;
  }

  abrirVentanaModal(id: string) {
    this.ventanaModalService.abrir(id);
  }

  cerrarVentanaModal(id: string) {
    this.ventanaModalService.cerrar(id);
  }

  public guardar(id: string) {
    this.tituloService.guardarTitulo(this.titulo);
    this.ventanaModalService.cerrar(id);
  }

  public eliminar(id: string) {
    //this.tituloService.guardarTitulo(this.titulo);
    this.ventanaModalService.cerrar(id);
  }

}
