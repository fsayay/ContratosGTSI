import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Tipo, Acta, Contrato, Seccion } from '../../model.component';
import { ContratosService } from '../contratos/contratos.service';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActasService {

  private apiURL = this.baseUrl + "api/Acta";
  private apiURLView = this.baseUrl + "api/ActaView";
  private apiURLTipo = this.baseUrl + "api/Tipo";

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, public contratosService: ContratosService) {

  }

  // Metodo get para traer las garantias por contratoId
  public getActas(contratoId: string): Observable<Contrato> {
    return this.http.get<Contrato>(this.apiURL + '/' + contratoId);
  }

  // Metodo get para traer tipos de actas por seccionId
  public getTipoActa(seccionId): Observable<Seccion> {
    return this.http.get<Seccion>(this.apiURLTipo + '/' + seccionId);
  }

  public getActasView(contratoId: string): Observable<Acta> {
    return this.http.get<Acta>(this.apiURLView + '/' + contratoId);
  }

  // Metodo post para insertar nueva garantia
  public insertActa(acta: Acta): Observable<Acta> {
    return this.http.post<Acta>(this.apiURL, acta).pipe(retry(1), catchError(this.errorHandler));
  }

  public updateActa(acta: Acta): Observable<Acta> {
    return this.http.put<Acta>(this.apiURL + '/' + acta.ID, acta).pipe(retry(1), catchError(this.errorHandler));
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
