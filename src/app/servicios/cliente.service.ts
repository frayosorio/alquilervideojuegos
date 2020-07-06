import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:8080/tercero";
  }

  public obtenerClientes(): Observable<any> {
    let urlT = this.url + "/listar";
    return this.http.get(urlT);
  }

  public guardarCliente(cliente) {
    this.http.post(this.url, cliente);
  }

  public eliminarCliente(id) {
    this.http.delete(this.url, id);
  }

}

export interface Cliente {
  id: number;
  nombre: string;
  idtipodocumento: number;
  documento: string;
  direccion: string;
  idciudad: number;
  telefono: string;
  correo: string;
  movil: string;
};


