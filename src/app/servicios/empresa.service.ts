import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:8080/empresa";
  }

  public obtenerEmpresas(): Observable<any> {
    let urlT = this.url + "/listar";
    return this.http.get(urlT);
  }

  public guardarEmpresa(empresa) {
    this.http.post(this.url, empresa);
  }

  public eliminarEmpresa(id) {
    this.http.delete(this.url, id);
  }

}

export interface Empresa {
  id: number;
  nombre: string;
  idpais: number;
};