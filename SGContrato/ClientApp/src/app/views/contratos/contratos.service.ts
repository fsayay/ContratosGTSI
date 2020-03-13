import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Contrato, Tipo, Solicitud } from '../../model.component';

@Injectable()
export class ContratosService {

  private api2 = this.baseUrl + "api/ContratosAdmin";
  private apiURL = this.baseUrl + "api/Contrato";
  private apiURLView = this.baseUrl + "api/ContratoView";
  private apiURLTipo = this.baseUrl + "api/Tipo";
  private apiURLSolicitud = this.baseUrl + "api/Solicitud";

  private contratoId: string="";
  private contratoActivo: Contrato;
  private contratoIncompletoId: number=0;
  
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  public getTipoContrato(seccionId): Observable<Tipo> {
    return this.http.get<Tipo>(this.apiURLTipo + '/' + seccionId);
  }

  // Metodo para traer una lista de contratos
  public getContratos(): Observable<Contrato[]> {
    return this.http.get<Contrato[]>(this.apiURL);
  }

  // Metodo para traer un contrato
  public getContrato(contratoId: string): Observable<Contrato> {
    return this.http.get<Contrato>(this.apiURL + '/' + contratoId);
  }

  // Metodo para traer un contratos por administrador
  public getContratosAdmin(adminId: string): Observable<Contrato> {
    return this.http.get<Contrato>(this.api2 + '/' + adminId);
  }

  // Metodo para traer un contrato
  public getContratoView(contratoId: string): Observable<Contrato> {
    return this.http.get<Contrato>(this.apiURLView + '/' + contratoId);
  }

  // Metodo para crear un nuevo contrato
  createContrato(contrato: Contrato): Observable<Contrato> {
    return this.http.post<Contrato>(this.apiURL, contrato); 
  }

  // Metodo para modificar un contrato
  updateContrato(contrato: Contrato): Observable<Contrato> {
    return this.http.put<Contrato>(this.apiURL + '/' + contrato.ID, contrato);
  }

  // Solicitudes
  public ingresarSolicitud(solicitud: Solicitud): Observable<Solicitud> {
    return this.http.post<Solicitud>(this.apiURLSolicitud, solicitud);
  }

  public getSolicitudes(uasId: string): Observable<Solicitud> {
    return this.http.get<Solicitud>(this.apiURLSolicitud + '/' + uasId);
  }

  // Metodo para setear el id del contrato activo
  public setContratoId(contratoId: string) {
      this.contratoId = contratoId;    
  }

  public setContratoIncompletoId(id: number) {
    this.contratoIncompletoId = id;
  }

  public getContratoIncompletoId() {
    return this.contratoIncompletoId;
  }

  public getIdContratoActivo() {
    if (this.contratoId != "") {
      return this.contratoId;
    } else {
      return;
    }    
  }
}
