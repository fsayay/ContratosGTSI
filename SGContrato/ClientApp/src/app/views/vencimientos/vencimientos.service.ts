import { Injectable, Inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Contrato, Vencimiento } from '../../model.component';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VencimientosService {

  private apiURL = this.baseUrl + "api/Vencimiento";
  
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  // Metodo get para traer las garantias por contratoId
  public getVencimientos(contratoId: string): Observable<Contrato> {
    return this.http.get<Contrato>(this.apiURL + '/' + contratoId);
  }
  
  // Metodo post para insertar un nuevo informe
  public insertVencimiento(vencimiento: Vencimiento): Observable<Vencimiento> {
    return this.http.post<Vencimiento>(this.apiURL, vencimiento).pipe(retry(1), catchError(this.errorHandler));
  }

  public updateVencimiento(vencimiento: Vencimiento): Observable<Vencimiento> {
    return this.http.put<Vencimiento>(this.apiURL + '/' + vencimiento.ID, vencimiento).pipe(retry(1), catchError(this.errorHandler));
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
