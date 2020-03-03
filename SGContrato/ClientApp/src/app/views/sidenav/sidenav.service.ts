import { Seccion, Tipo } from '../../model.component';
import { Observable } from 'rxjs';
import { Injectable, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SideNavService{

  public seccion: Seccion = null;
  public isDisabled: boolean;
  private apiURLSeccion = this.baseUrl + "api/Seccion";
  private apiURLTipo = this.baseUrl + "api/Tipo";

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }

  public setIsDisabled(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }

  public getIsDisabled() {
    return this.isDisabled;
  }

  public setSeccionActual(seccion: Seccion) {
    this.seccion = seccion;
  }

  public getSeccionActual() {
    return this.seccion;
  }

  //Metodo que trae todas las secciones con sus tipos
  public getSecciones(): Observable<Seccion> {
    return this.http.get<Seccion>(this.apiURLSeccion);
  }

  // Metodo que trae una seccion con sus tipos
  public getSeccion(seccionId): Observable<Seccion> {
    return this.http.get<Seccion>(this.apiURLSeccion + '/' + seccionId);
  }

  // Metodo que trae un tipo por su id
  public getTipo(tipoId): Observable<Tipo> {
    return this.http.get<Tipo>(this.apiURLTipo + '/' + tipoId);
  }
}
