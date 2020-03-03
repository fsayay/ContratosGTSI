export interface AuthUserInterface {
  name: string;
  nameidentifier: string;
  emailaddress: string;
  cedula: string;
  roles: string[];
  ultimoAcceso: Date;
}

export class AuthUser implements AuthUserInterface {
  constructor(public name: string, public nameidentifier: string,
    public emailaddress: string, public cedula: string,
    public roles: string[], public ultimoAcceso: Date) { }
}


export interface unidad {
  ID: number;
  id: number;
  nombre: string;
  descripcion: string;
  email:string
}

export interface User {
  ID: number;
  id: number;
  txt_username: string;
  txt_apellido: string;
  txt_nombre: string;
  userRol: UserRol[];
}

export interface Rol {
  ID: number;
  id: number;
  txt_rolName: string;
  txt_rolDetaile: string;
  userRol: UserRol[];
}

export interface UserRol {
  userID: number;
  rolID: number;
  user: User;
  rol: Rol;
}

export interface UserView {
  ID: number;
  rolID: number;
  NombreRol: string;
  Usuario: string;
  Apellido: string;
  Nombre: string
}

export interface Solicitud {
  ID: number;
  id: number;
  txt_codigoSolicitud: string;
  qn_cantContratos: number;
  txt_motivoSolicitud: string;
  txt_admRecomendado: string;
  qn_estadoSolicitud: number;
  dt_fechaUltimoCambio: Date;
  UserID: number
}

export interface Contrato {
  ID: number;
  id: number;
  txt_codigoContrato: string;
  qn_tipoContrato: number;
  txt_numProceso: string;
  qn_tipoProceso: number;
  qn_vigenciaContrato: number;
  dt_fechaSuscripcion: string;
  dt_fechaInicio: string;
  dt_fechaFin: string;
  vm_montoAdjudicado: number;
  bol_recurrencia?: boolean;
  txt_nombreProveedor: string;
  txt_rucProveedor: string;
  txt_objetoContratacion: string;
  qn_unidadConsolidadora: number;
  txt_nombreDelegado: string;
  userRolID: number;
  txt_nombreTecnicoExterno: string;
  txt_detalleFormaPago: string;
  txt_detalleGarantias: string;
  txt_archivoContrato: string;
  qn_estadoContrato: number;
  dt_fechaUltimoCambio: string;
  solicitudID: number;
  garantias: Garantia[];
  formaPago: FormaPago;
  multas: Multa[];
  informes: Informe[];
  actas: Acta[];
  entregables: Entregable[];
  modificaciones: Modificacion[];
  historial: Historial[];
  vencimientos: Vencimiento[];
}

export interface Garantia {
  ID: number;
  id: number;
  qn_tipoGarantia: number;
  vm_valorGarantia: number;
  txt_codigoGarantia: string;
  txt_proveedorGarantia: string;
  dt_inicioGarantia: Date;
  dt_finGarantia: Date;
  txt_archivoGarantia: string;
  dt_fechaUltimoCambio: Date;
  contratoID: number;
}

export interface FormaPago {
  ID: number;
  id: number;
  qn_tipoPago: number;  
  dt_fechaUltimoCambio: Date;
  pagos: Pago;
  contratoID: number;
}

export interface Pago {
  ID: number;
  id: number;
  qn_porcentajePago: number;
  bol_esAnticipo: boolean;
  vm_montoPago: number;
  dt_tentativaPago: Date;
  dt_realPago: Date;
  txt_comprobantePago: string;
  dt_fechaUltimoCambio: Date;
  formaPagoID: number;
}
export interface Multa {
  ID: number;
  id: number;
  qn_tipoMulta: number;
  vm_montoMulta: number;
  txt_motivoMulta: string;
  dt_fechaMulta: Date;
  dt_fechaUltimoCambio: Date;
  txt_codigoInforme: string;
  contratoID: number;
}

export interface Informe {
  ID: number;
  id: number;
  qn_tipoInforme: number;
  txt_codigoInforme: string;
  dt_fechaInforme: Date;
  txt_archivoInforme: string;
  dt_fechaUltimoCambio: Date;
  contratoID: number;
}

export interface Acta {
  ID: number;
  id: number;
  qn_tipoActa: number;
  txt_codigoActa: string;
  dt_fechaActa: Date;
  txt_archivoActa: string;
  dt_fechaUltimoCambio: Date;
  contratoID: number;
}

export interface Entregable {
  ID: number;
  id: number;
  qn_tipoEntregable: number;
  qn_cantidadEntregable: number;
  dt_fechaEntregable: Date;
  txt_archivoEntregable: string;
  txt_descripcionEntregable: string;
  dt_fechaUltimoCambio: Date;
  contratoID: number;
}

export interface Modificacion {
  ID:number;
  id: number;
  qn_tipoModificacion: number;
  txt_motivoModificacion: string;
  dt_fechaUltimoCambio: Date;
  valorModificado: valorModificado;
  fechaModificado: fechaModificado;
  contratoID: number;
}

export interface valorModificado {
  ID: number;
  id: number;
  vm_valorAnterior: number;
  vm_valorActual: number;
  modificacionID: number;
}

export interface fechaModificado {
  ID: number;
  id: number;
  dt_fechaAnterior: Date;
  dt_fechaActual: Date;
  modificacionID: number;
}

export interface Vencimiento {
  ID: number;
  id: number;
  txt_nombreSeccion: string;
  txt_nombreTipo: string;
  dt_fechaVencimiento: Date;
  qn_diasAnticipacion: number;
  qn_frecuenciaAnticipacion: number;
  dt_fechaUltimoCambio: Date;
  contratoID: number;
}

export interface Historial {
  ID: number;
  id: number;
  txt_seccionHistorial: string;
  txt_accionHistorial: string;
  dt_fechaUltimoCambio: string;
  contratoID: number;
}

export interface Tipo {
  tipoID: number;
  txt_nombreTipo: string;
  txt_detalleTipo: string;
  seccionID: number;
}

export interface Seccion {
  seccionID: number;
  txt_nombreSeccion: string;
  txt_detalleSeccion: string;
  bol_estadoSeccion: boolean;
  tipos: Tipo[];
}
