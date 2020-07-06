import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlquilerService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:8080/alquiler";
  }

  public obtenerAlquileres(): Observable<any> {
    let urlT = this.url + "/listar";
    return this.http.get(urlT);
  }

  public buscarAlquileresFecha(desde, hasta): Observable<any> {
    let urlT = this.url + "/buscarfecha/" + desde + "/" + hasta;
    return this.http.get(urlT);
  }

  public guardarAlquiler(alquiler) {
    this.http.post(this.url, alquiler);
  }

  public eliminarAlquiler(id) {
    this.http.delete(this.url, id);
  }

}

export interface Alquiler {
  id: number;
  fechadevolucion: string;
  fechaprestamo: string;
  plazo: number;
  precio: number;
  idinventario: number;
  idtercero: number;
};

