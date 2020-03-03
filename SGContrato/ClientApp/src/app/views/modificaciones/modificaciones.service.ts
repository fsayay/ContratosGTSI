import { Injectable, Inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Contrato, Tipo, Seccion, Modificacion, fechaModificado, valorModificado } from '../../model.component';
import { ContratosService } from '../contratos/contratos.service';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ModificacionesService {

  private apiURL = this.baseUrl + "api/Modificacion";
  private apiURLValor = this.baseUrl + "api/ValorModificar";
  private apiURLFecha = this.baseUrl + "api/FechaModificar";
  private apiURLTipo = this.baseUrl + "api/Tipo";

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, public contratosService: ContratosService) {

  }


  // Metodo get para traer los entregables por contratoId
  public getModificaciones(contratoId: string): Observable<Contrato> {
    return this.http.get<Contrato>(this.apiURL + '/' + contratoId);
  }

  public getTipoModificacion(seccionId): Observable<Seccion> {
    return this.http.get<Seccion>(this.apiURLTipo + '/' + seccionId);
  }

  // Metodo post para insertar nueva garantia
  public insertModificacion(modificacion: Modificacion): Observable<Modificacion> {
    return this.http.post<Modificacion>(this.apiURL, modificacion).pipe(retry(1), catchError(this.errorHandler));
  }

  public updateModificacion(modificacion: Modificacion): Observable<Modificacion> {
    return this.http.put<Modificacion>(this.apiURL + '/' + modificacion.ID, modificacion).pipe(retry(1), catchError(this.errorHandler));
  }

  // Metodo post para insertar nueva garantia
  public getValorModificado(modificacionId: string): Observable<valorModificado> {
    return this.http.get<valorModificado>(this.apiURLValor + '/' + modificacionId).pipe(retry(1), catchError(this.errorHandler));
  }

  public insertValorModificar(valor: valorModificado): Observable<valorModificado> {
    return this.http.post<valorModificado>(this.apiURLValor, valor).pipe(retry(1), catchError(this.errorHandler));
  }

  public updateValorModificar(valor: valorModificado): Observable<valorModificado> {
    return this.http.put<valorModificado>(this.apiURLValor + '/' + valor.ID, valor).pipe(retry(1), catchError(this.errorHandler));
  }

  // Metodo post para insertar nueva garantia
  public getFechaModificado(modificacionId: string): Observable<fechaModificado> {
    return this.http.get<fechaModificado>(this.apiURLFecha + '/' + modificacionId).pipe(retry(1), catchError(this.errorHandler));
  }

  public insertFechaModificar(fecha: fechaModificado): Observable<fechaModificado> {
    return this.http.post<fechaModificado>(this.apiURLFecha, fecha).pipe(retry(1), catchError(this.errorHandler));
  }

  public updateFechaModificar(fecha: fechaModificado): Observable<fechaModificado> {
    return this.http.put<fechaModificado>(this.apiURLFecha + '/' + fecha.ID, fecha).pipe(retry(1), catchError(this.errorHandler));
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }



}
