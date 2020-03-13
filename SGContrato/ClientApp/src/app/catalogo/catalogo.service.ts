import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Seccion, Tipo, Rol, UserRol, User } from '../model.component';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  public categoriaActual: Seccion;
  public categorias: Seccion[];

  private apiURLSeccion = this.baseUrl + "api/Seccion";
  private apiURLTipo = this.baseUrl + "api/Tipo";
  private apiURLUserRol = this.baseUrl + "api/UserRol";
  private apiURLUserView = this.baseUrl + "api/UserView";
  private apiURLRol = this.baseUrl + "api/Rol";
  private apiURLUser = this.baseUrl + "api/Users";

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  // Seccion
  public getSeccion(): Observable<Seccion> {
    return this.http.get<Seccion>(this.apiURLSeccion).pipe(retry(1),catchError(this.errorHandler));
  }

  public getSec(seccionID: string): Observable<Seccion> {
    return this.http.get<Seccion>(this.apiURLSeccion + '/' + seccionID).pipe(retry(1), catchError(this.errorHandler));
  }

  insertSeccion(seccion: Seccion) {
    return this.http.post<Seccion>(this.apiURLSeccion, seccion).pipe(retry(1), catchError(this.errorHandler));
  }

  updateSeccion(seccion: Seccion): Observable<Seccion> {
    return this.http.put<Seccion>(this.apiURLSeccion + '/' + seccion.seccionID, seccion).pipe(retry(1), catchError(this.errorHandler));
  }

  setCategoria(categoria: Seccion) {
    this.categoriaActual = categoria;
  }

  getCategoriaActual() {
    return this.categoriaActual;
  }

  // Tipos
  public getTipo(): Observable<Tipo> {
    return this.http.get<Tipo>(this.apiURLTipo).pipe(retry(1), catchError(this.errorHandler));
  }

  insertTipo(tipo:Tipo) {
    return this.http.post<Tipo>(this.apiURLTipo, tipo).pipe(retry(1), catchError(this.errorHandler));
  }

  updateTipo(tipo: Tipo): Observable<Tipo> {
    return this.http.put<Tipo>(this.apiURLTipo + '/' + tipo.tipoID, tipo).pipe(retry(1), catchError(this.errorHandler));
  }

  // Usuario
  public getUsers(): Observable<User> {
    return this.http.get<User>(this.apiURLUser).pipe(retry(1), catchError(this.errorHandler));
  }

  // UsuarioRol
  public getUserRol(): Observable<UserRol> {
    return this.http.get<UserRol>(this.apiURLUserRol).pipe(retry(1), catchError(this.errorHandler));
  }

  public getUserView(): Observable<any> {
    return this.http.get<any>(this.apiURLUserView).pipe(retry(1), catchError(this.errorHandler));
  }

  public getUserRolID(userId: string): Observable<UserRol> {
    return this.http.get<UserRol>(this.apiURLUserRol + '/' + userId).pipe(retry(1), catchError(this.errorHandler));
  }

  insertUserRol(userRol: UserRol) {
    return this.http.post<UserRol>(this.apiURLUserRol, userRol).pipe(retry(1), catchError(this.errorHandler));
  }

  updateUserRol(userRol: UserRol): Observable<UserRol> {
    return this.http.put<UserRol>(this.apiURLUserRol + '/' + userRol.userID, userRol).pipe(retry(1), catchError(this.errorHandler));
  }

  // Roles
  public getRoles(): Observable<Rol> {
    return this.http.get<Rol>(this.apiURLRol).pipe(retry(1), catchError(this.errorHandler));
  }

  insertRol(rol: Rol) {
    return this.http.post<Rol>(this.apiURLRol, rol).pipe(retry(1), catchError(this.errorHandler));
  }

  updateRol(rol: Rol): Observable<Rol> {
    return this.http.put<Rol>(this.apiURLRol + '/' + rol.ID, rol).pipe(retry(1), catchError(this.errorHandler));
  }

  public getUserIDRol(usuarioId: string): Observable<Rol> {
    return this.http.get<Rol>(this.apiURLRol + '/' + usuarioId).pipe(retry(1), catchError(this.errorHandler));
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
