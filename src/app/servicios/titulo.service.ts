import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TituloService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:8080/titulo";
  }

  obtenerTitulos(): Observable<any> {
    let urlT = this.url + "/listar";
    return this.http.get(urlT);
  }


  

  guardarTitulo(titulo) {
    this.http.post(this.url, titulo);
  }

  eliminarTitulo(id) {
    this.http.delete(this.url, id);
  }

}

export interface Titulo {
  id: number;
  nombre: string;
  año: number;
  protagonistas: string;
  productor: string;
  director: string;
  idempresa: number;
  precio: number;
};

