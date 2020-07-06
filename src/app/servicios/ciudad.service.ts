import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:8080/ciudad";
  }

  public obtenerCiudades(): Observable<any> {
    let urlT = this.url + "/listar";
    return this.http.get(urlT);
  }

  public guardarCiudad(ciudad) {
    this.http.post(this.url, ciudad);
  }

  public eliminarCiudad(id) {
    this.http.delete(this.url, id);
  }

}

export interface Ciudad {
  id: number;
  ciudad: string;
  idregion: number;
};