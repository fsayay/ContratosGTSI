import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormaPago, Tipo, Pago } from '../../model.component';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  private apiURL = this.baseUrl + "api/FormaPago";
  private apiURLTipo = this.baseUrl + "api/Tipo";

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }

  // Metodo get para traer las garantias por contratoId
  public getFormaPago(contratoId: string): Observable<FormaPago> {
    return this.http.get<FormaPago>(this.apiURL + '/' + contratoId);
  }

  // Metodo get para traer tipos de actas por seccionId
  public getTiposPago(seccionId: string): Observable<Tipo> {
    return this.http.get<Tipo>(this.apiURLTipo + '/' + seccionId);
  }

  //Metodo para traer un tipo de pago
  public getTipoPago(qn_tipoPago: string): Observable<Tipo> {
    return this.http.get<Tipo>(this.apiURLTipo + '/' + qn_tipoPago);
  }

  public insertFormaPago(formaPago: FormaPago): Observable<FormaPago> {
    return this.http.post<FormaPago>(this.apiURL, formaPago);
  }

  public updateFormaPago(pagos: FormaPago): Observable<FormaPago> {
    return this.http.put<FormaPago>(this.apiURL, pagos);
  }

}
