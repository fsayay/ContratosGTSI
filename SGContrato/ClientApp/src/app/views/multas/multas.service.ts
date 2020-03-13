import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Contrato, Tipo, Seccion, Multa } from '../../model.component';
import { ContratosService } from '../contratos/contratos.service';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MultasService {

  private apiURL = this.baseUrl + "api/Multa";
  private apiURLView = this.baseUrl + "api/MultaView";
  private apiURLTipo = this.baseUrl + "api/Tipo";

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, public contratosService: ContratosService) {

  }
  
  // Metodo get para traer las garantias por contratoId
  public getMultas(contratoId: string): Observable<Contrato> {
    return this.http.get<Contrato>(this.apiURL + '/' + contratoId);
  }

  public getMultasView(contratoId: string): Observable<Multa> {
    return this.http.get<Multa>(this.apiURLView + '/' + contratoId);
  }

  public getTipoMulta(seccionId): Observable<Seccion> {
    return this.http.get<Seccion>(this.apiURLTipo + '/' + seccionId);
  }

  // Metodo post para insertar nueva Multa
  public insertMulta(multa: Multa): Observable<Multa> {
    return this.http.post<Multa>(this.apiURL, multa).pipe(retry(1), catchError(this.errorHandler));
  }

  public updateMulta(multa: Multa): Observable<Multa> {
    return this.http.put<Multa>(this.apiURL + '/' + multa.ID, multa).pipe(retry(1), catchError(this.errorHandler));
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
