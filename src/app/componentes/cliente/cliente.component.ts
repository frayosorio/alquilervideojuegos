import { Component, OnInit } from '@angular/core';

import { CiudadService } from '../../servicios/ciudad.service';
import { ClienteService } from '../../servicios/cliente.service';
import { TipodocumentoService } from '../../servicios/tipodocumento.service';
import { HttpClient } from '@angular/common/http';

import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';

import { VentanaModalService } from '../../ventana-modal';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html'
})
export class ClienteComponent implements OnInit {

  public clientes;
  public tiposdocumentos;
  public ciudades;

  public columnas: any;

  public modoColumna = ColumnMode;
  public tipoSeleccion = SelectionType;
  public clienteSeleccion;
  public clienteEdicion;

  //public filas: any;

  constructor(private clienteService: ClienteService,
    private tipodocumentoService: TipodocumentoService,
    private ciudadService: CiudadService,
    private http: HttpClient,
    private ventanaModalService: VentanaModalService) {
    this.columnas = [
      { name: 'nombre' },
      { name: 'idtipodocumento' },
      { name: 'documento' },
      { name: 'direccion' },
      { name: 'idciudad' },
      { name: 'telefono' },
      { name: 'correo' },
      { name: 'movil' }
    ];

    this.clientes = [];

  }

  ngOnInit() {
    this.listar();
  }

  public listar() {
    this.clienteService.obtenerClientes()
      .subscribe(dataT => {
        this.clientes = dataT;
      }
      );
    this.tipodocumentoService.obtenerTipodocumentos()
      .subscribe(dataE => {
        this.tiposdocumentos = dataE;
      }
      );
    this.ciudadService.obtenerCiudades()
      .subscribe(dataC => {
        this.ciudades = dataC;
      }
      );
  }

  public onActivate(event) {
    if (event.type == 'click') {
      this.clienteSeleccion = event.row;
    }
  }

  public abrirVentanaModal(id: string) {
    this.ventanaModalService.abrir(id);
  }

  public cerrarVentanaModal(id: string) {
    this.ventanaModalService.cerrar(id);
  }

  public nuevo() {
    this.clienteEdicion = {
      id: -1,
      nombre: "",
      idtipodocumento: 0,
      documento: "",
      direccion: "",
      idciudad: 0,
      telefono: "",
      correo: "",
      movil: ""
    };
    this.abrirVentanaModal('modalModificar');
  }

  public modificar() {
    if (this.clienteSeleccion != null && this.clienteSeleccion.id >= 0) {
      this.clienteEdicion = this.clienteSeleccion;
      this.abrirVentanaModal('modalModificar');
    }
  }

  public verificarEliminar() {
    if (this.clienteSeleccion != null && this.clienteSeleccion.id >= 0) {
      this.abrirVentanaModal('modalEliminar');
    }
  }

  public guardar(id: string) {
    this.clienteService.guardarCliente(this.clienteEdicion);
    this.ventanaModalService.cerrar(id);
  }

  public eliminar(id: string) {
    this.clienteService.eliminarCliente(this.clienteSeleccion.id);
    this.ventanaModalService.cerrar(id);
  }

}
