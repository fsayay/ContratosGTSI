import { Injectable, Inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Contrato, Tipo, Informe } from '../../model.component';
import { ContratosService } from '../contratos/contratos.service';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InformesService {

  private apiURL = this.baseUrl + "api/Informe";
  private apiURLView = this.baseUrl + "api/InformeView";
  private apiURLTipo = this.baseUrl + "api/Tipo";

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, public contratosService: ContratosService) {

  }

  // Metodo get para traer las garantias por contratoId
  public getInformes(contratoId: string): Observable<Contrato> {
    return this.http.get<Contrato>(this.apiURL + '/' + contratoId);
  }

  public getInformesView(contratoId: string): Observable<Informe> {
    return this.http.get<Informe>(this.apiURLView + '/' + contratoId);
  }

  public getTipoInforme(seccionId): Observable<Tipo> {
    return this.http.get<Tipo>(this.apiURLTipo + '/' + seccionId);
  }

  // Metodo post para insertar un nuevo informe
  public insertInforme(informe: Informe): Observable<Informe> {
    return this.http.post<Informe>(this.apiURL, informe).pipe(retry(1), catchError(this.errorHandler));
  }

  public updateInforme(informe: Informe): Observable<Informe> {
    return this.http.put<Informe>(this.apiURL + '/' + informe.ID, informe).pipe(retry(1), catchError(this.errorHandler));
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
