import { Injectable, Inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Contrato, Entregable, Tipo } from '../../model.component';
import { ContratosService } from '../contratos/contratos.service';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EntregablesService {

  private apiURL = this.baseUrl + "api/Entregable";
  private apiURLView = this.baseUrl + "api/EntregableView";
  private apiURLTipo = this.baseUrl + "api/Tipo";

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, public contratosService: ContratosService) {

  }

  // Metodo get para traer los entregables por contratoId
  public getEntregables(contratoId: string): Observable<Contrato> {
    return this.http.get<Contrato>(this.apiURL + '/' + contratoId);
  }

  public getTipoEntregable(seccionId): Observable<Tipo> {
    return this.http.get<Tipo>(this.apiURLTipo + '/' + seccionId);
  }

  public getEntregablesView(contratoId: string): Observable<Entregable> {
    return this.http.get<Entregable>(this.apiURLView + '/' + contratoId);
  }

  // Metodo post para insertar nueva garantia
  public insertEntregable(entregable: Entregable): Observable<Entregable> {
    return this.http.post<Entregable>(this.apiURL, entregable).pipe(retry(1), catchError(this.errorHandler));
  }

  public updateEntregable(entregable: Entregable): Observable<Entregable> {
    return this.http.put<Entregable>(this.apiURL + '/' + entregable.ID, entregable).pipe(retry(1), catchError(this.errorHandler));
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
