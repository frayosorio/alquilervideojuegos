import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';

import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';

import { AlquilerService } from '../../servicios/alquiler.service';

@Component({
  selector: 'app-alquiler',
  templateUrl: './alquiler.component.html',
  styleUrls: ['./alquiler.component.scss'],
})
export class AlquilerComponent implements OnInit {

  public columnas: any;

  public alquileres;

  public modoColumna = ColumnMode;
  public tipoSeleccion = SelectionType;
  public clienteSeleccion;
  public clienteEdicion;

  public ocultarBusquedaFecha: boolean;
  public ocultarBusquedaTitulo: boolean;
  public ocultarBusquedaCliente: boolean;

  public rangoFechas: { from: string; to: string; };
  public opcionesRango: CalendarComponentOptions = {
    pickMode: 'range',
    color: 'danger',
    from: new Date('2018-01-01'),
  };
  public tipo: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'

  constructor(private alquilerService: AlquilerService) {
    this.ocultarBusquedaFecha = true;
    this.ocultarBusquedaTitulo = true;
    this.ocultarBusquedaCliente = true;

    this.columnas = [
      { name: 'fechaprestamo' },
      { name: 'titulo' },
      { name: 'cliente' },
      { name: 'plazo' },
      { name: 'fechadevolucion' },
      { name: 'precio' },
      { name: 'tecnologia' }
    ];
  }

  ngOnInit() { }

  seleccionarBusqueda(opcion) {
    this.ocultarBusquedaFecha = true;
    this.ocultarBusquedaTitulo = true;
    this.ocultarBusquedaCliente = true;
    switch (opcion) {
      case "1":
        this.ocultarBusquedaFecha = false;
        break;
      case "2":
        this.ocultarBusquedaTitulo = false;
        break;
      case "3":
        this.ocultarBusquedaCliente = false;
        break;
    }
  }

  public buscar(rangoFechas){
    this.alquilerService.buscarAlquileresFecha(rangoFechas.from.format('yyyy-MM-DD'), rangoFechas.to.format('yyyy-MM-DD'))
      .subscribe(data => {
        this.alquileres = data;
      }
      );
  }

}
