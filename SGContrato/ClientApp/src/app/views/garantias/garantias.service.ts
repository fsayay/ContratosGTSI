import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Garantia, Tipo, Contrato, Seccion } from '../../model.component';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GarantiasService {

  private apiURL = this.baseUrl + "api/Garantia";
  private apiURLView = this.baseUrl + "api/GarantiaView";
  private apiURLTipo = this.baseUrl + "api/Tipo";

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
   
  }

  // Metodo get para traer las garantias por contratoId
  public getGarantias(contratoId: string): Observable<Contrato> {
    return this.http.get<Contrato>(this.apiURL + '/' + contratoId);
  }

  public getGarantiasView(contratoId: string): Observable<Garantia> {
    return this.http.get<Garantia>(this.apiURLView + '/' + contratoId);
  }

  // Metodo get para traer tipos de garantias por seccionId
  public getTipoGarantia(seccionId): Observable<Seccion> {
    return this.http.get<Seccion>(this.apiURLTipo + '/' + seccionId);
  }

  // Metodo post para insertar nueva garantia
  public insertGarantia(garantia: Garantia): Observable<Garantia>{
    return this.http.post<Garantia>(this.apiURL, garantia).pipe(retry(1), catchError(this.errorHandler));
  }

  public updateGarantia(garantia: Garantia): Observable<Garantia> {
    return this.http.put<Garantia>(this.apiURL + '/' + garantia.ID, garantia).pipe(retry(1), catchError(this.errorHandler));
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




