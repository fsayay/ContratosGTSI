using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SGContrato.Models
{
    public class ViewModel
    {
    }

    public class UserRol_View
    {
        public int ID { get; set; }
        public int rolID { get; set; }
        public string NombreRol { get; set; }
        public string Usuario { get; set; }
        public string Apellido { get; set; }
        public string Nombre { get; set; }
    }    
    public class Contrato_View
    {
        public int ID { get; set; }
        public string txt_codigoContrato { get; set; }
        public string tipoContrato { get; set; }
        public string txt_numProceso { get; set; }
        public string tipoProceso { get; set; }
        public int qn_vigenciaContrato { get; set; }
        public DateTime dt_fechaSuscripcion { get; set; }
        public DateTime dt_fechaInicio { get; set; }
        public DateTime dt_fechaFin { get; set; }
        public double vm_montoAdjudicado { get; set; }
        public bool bol_recurrencia { get; set; }
        public string txt_nombreProveedor { get; set; }
        public string txt_rucProveedor { get; set; }
        public string txt_objetoContratacion { get; set; }
        public int? qn_unidadConsolidadora { get; set; }
        public string txt_nombreDelegado { get; set; }
        public string txt_nombre { get; set; }
        public string txt_apellido { get; set; }
        public string txt_nombreTecnicoExterno { get; set; }
        public string txt_detalleFormaPago { get; set; }
        public string txt_detalleGarantias { get; set; }
        public string txt_archivoContrato { get; set; }
        public string estadoContrato { get; set; }
        public string txt_codigoTransferencia { get; set; }        
    }

    public class Solicitud_View
    {
        public int ID { get; set; }
        public string txt_codigoSolicitud { get; set; }
        public int qn_cantContratos { get; set; }
        public string txt_motivoSolicitud { get; set; }
        public string txt_admRecomendado { get; set; }
        public string estadoSolicitud { get; set; }
        public int qn_estadoSolicitud { get; set; }
        public string txt_nombre { get; set; }
        public string txt_apellido { get; set; }
    }

    public class Garantia_View
    {
        public int ID { get; set; }
        public string tipoGarantia { get; set; }
        public int qn_tipoGarantia { get; set; }
        public Double vm_valorGarantia { get; set; }
        public string txt_codigoGarantia { get; set; }
        public string txt_proveedorGarantia { get; set; }
        public DateTime dt_inicioGarantia { get; set; }
        public DateTime dt_finGarantia { get; set; }
        public string txt_archivoGarantia { get; set; }
        public int contratoID { get; set; }
    }

    public class FormaPago_View
    {
        public int ID { get; set; }
        public string tipoPago { get; set; }
        public int qn_tipoPago { get; set; }
        public int contratoID { get; set; }
        public float qn_porcentajePago { get; set; }
        public Double vm_montoPago { get; set; }
        public DateTime dt_tentativaPago { get; set; }
        public string txt_comprobantePago { get; set; }
    }
    public class Multa_View
    {
        public int ID { get; set; }
        public string tipoMulta { get; set; }
        public int qn_tipoMulta { get; set; }
        public Double vm_montoMulta { get; set; }
        public string txt_motivoMulta { get; set; }
        public DateTime dt_fechaMulta { get; set; }
        public string txt_codigoInforme { get; set; }
        public int contratoID { get; set; }
    }

    public class Informe_View
    {
        public int ID { get; set; }
        public string tipoInforme { get; set; }
        public int qn_tipoInforme { get; set; }
        public string txt_codigoInforme { get; set; }
        public DateTime dt_fechaInforme { get; set; }
        public string txt_archivoInforme { get; set; }
        public int contratoID { get; set; }
    }

    public class Modificacion_View
    {
        public int ID { get; set; }
        public string TipoModificacion { get; set; }
        public string MotivoModificacion { get; set; }
        public DateTime FechaUltimoCambio { get; set; }
        public string DatoAnterior { get; set; }
        public string DalorActual { get; set; }
        public int contratoID { get; set; }
    }
    
    public class Acta_View
    {
        public int ID { get; set; }
        public string tipoActa { get; set; }
        public int qn_tipoActa { get; set; }
        public string txt_codigoActa { get; set; }
        public DateTime dt_fechaActa { get; set; }
        public string txt_archivoActa { get; set; }
        public int contratoID { get; set; }
    }

    public class Entregable_View
    {
        public int ID { get; set; }
        public string tipoEntregable { get; set; }
        public int qn_tipoEntregable { get; set; }
        public int qn_cantidadEntregable { get; set; }
        public DateTime dt_fechaEntregable { get; set; }
        public string txt_archivoEntregable { get; set; }
        public string txt_descripcionEntregable { get; set; }
        public int contratoID { get; set; }
    }
}
