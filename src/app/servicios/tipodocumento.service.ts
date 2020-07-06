import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipodocumentoService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:8080/tipodocumento";
  }

  public obtenerTipodocumentos(): Observable<any> {
    let urlT = this.url + "/listar";
    return this.http.get(urlT);
  }

  public guardarTipodocumento(tipodocumento) {
    this.http.post(this.url, tipodocumento);
  }

  public eliminarTipodocumento(id) {
    this.http.delete(this.url, id);
  }

}

export interface Tipodocumento {
  id: number;
  tipo: string;
  ingles: string;
  sigla: string;
};

