import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GarantiasService } from '../garantias/garantias.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ContratosService } from '../contratos/contratos.service';
import { Contrato, Garantia, Historial, Vencimiento} from '../../model.component';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGarantiaComponent } from '../../formularios/formGarantia/form-garantia.component';
import { ToastrService } from 'ngx-toastr';
import { HistorialService } from '../historial/historial.service';
import { VencimientosService } from '../vencimientos/vencimientos.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//import { PdfViewerComponent } from '../pdf-viewer/pdf-viewer.component';
import { ShowPdfComponent } from '../showPdfComponent/show-pdf.component';

@Component({
    selector: 'app-garantias',
    templateUrl: './garantias.component.html',
    styleUrls: ['./garantias.component.css']
})
export class GarantiasComponent implements OnInit {

  public garantias: Garantia;
  public formGroup: FormGroup;
  public nuevaGarantia: Garantia;
  public editGarantia: Garantia;
  public nuevoHistorial: Historial;
  public formHistorial: FormGroup;
  public formVencimiento: FormGroup;
  public historial: Historial;
  public vencimiento: Vencimiento;
  public nombreArchivo: string = "";
  public usuario: any;
  

  constructor(private vencimientoService: VencimientosService,
    private historialService: HistorialService,
    private activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private http: HttpClient,
    private contratosService: ContratosService,
    private garantiasService: GarantiasService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.cargarDatos();
  }

  cargarDatos() {
    this.garantiasService.getGarantiasView(this.contratosService.getIdContratoActivo()).subscribe(GarantiasDesdeWS => this.garantias = GarantiasDesdeWS, error => console.error(error), () => this.mostrarDatos());    
  }

  mostrarDatos() {
    console.log(this.garantias);
  }

  public agregarGarantia() {
    const modalRef = this.modalService.open(FormGarantiaComponent);
    modalRef.componentInstance.garantia = null; // should be the id
    modalRef.result.then((result) => {
      this.nuevaGarantia = result;
      this.insertar();
    }).catch((error) => {
      console.log(error);
    });
  }

  public editarGarantia(garantia: Garantia) {
    const modalRef = this.modalService.open(FormGarantiaComponent);
    this.nombreArchivo = garantia.txt_archivoGarantia;
    console.log(this.nombreArchivo);
    modalRef.componentInstance.garantia = garantia; // should be the id
    modalRef.result.then((result) => {
      console.log(result);
      if (result.txt_archivoGarantia == '') {
        result.txt_archivoGarantia = this.nombreArchivo;
        console.log(result.txt_archivoGarantia);
        this.nombreArchivo = "";
      }
      this.editGarantia = result;
      this.editar();
    }).catch((error) => {
      console.log(error);
    });
  }

  public insertar() {
    let garantia;
    this.crearVencimiento(this.nuevaGarantia);
    this.crearHistorial("Se ingreso nueva garantia con codigo " + this.nuevaGarantia.txt_codigoGarantia);
    this.nuevaGarantia.txt_archivoGarantia = this.nuevaGarantia.txt_archivoGarantia.replace(/\\/g, "/");    
    this.garantiasService.insertGarantia(this.nuevaGarantia).subscribe(garantiaDesdeWS => garantia = garantiaDesdeWS, error => this.showError(), () => this.showSuccess("¡Ingreso de dato exitoso!!"));
  }

  public editar() {
    console.log(this.editGarantia);
    let garantia;
    this.crearHistorial("Se modifico la garantia con codigo " + this.editGarantia.txt_codigoGarantia);
    this.editGarantia.txt_archivoGarantia = this.editGarantia.txt_archivoGarantia.replace(/\\/g, "/");
    this.garantiasService.updateGarantia(this.editGarantia).subscribe(garantiaDesdeWS => garantia = garantiaDesdeWS, error => this.showError(), () => this.showSuccess("¡Actualizacion de dato exitoso!!"));
  }

  // Metodo para decirle al usuario que todo salio correcto
  showSuccess(mensaje: string) {
    this.toastr.success(mensaje, 'Success!');
    this.cargarDatos();
  }

  showError() {
    this.toastr.error('A ocurrido un error en el servidor!', 'Error!');
  }

  crearHistorial(mensaje: string) {
    this.historialForm(mensaje);
    this.historial = this.formHistorial.value;
    this.historialService.insertHistorial(this.historial).subscribe((data: any) => this.historial = data);
  }

  public historialForm(mensaje: string) {
    const dateLength = 10;
    const today = new Date().toISOString().substring(0, dateLength);
    this.formHistorial = this.fb.group({
      ID: 0,
      txt_seccionHistorial: 'GARANTIA',
      txt_accionHistorial: mensaje,
      dt_fechaUltimoCambio: today,
      contratoID: this.contratosService.getIdContratoActivo()
    });
  }

  crearVencimiento(garantia: Garantia) {
    this.vencimientoForm(garantia);
    this.vencimiento = this.formVencimiento.value;
    this.vencimientoService.insertVencimiento(this.vencimiento).subscribe((data: any) => this.vencimiento = data);
  }

  public vencimientoForm(garantia: Garantia) {
    const dateLength = 10;
    const today = new Date().toISOString().substring(0, dateLength);
    this.formVencimiento = this.fb.group({
      ID: 0,
      txt_nombreSeccion: 'GARANTIA',
      txt_nombreTipo: garantia.qn_tipoGarantia,
      dt_fechaVencimiento: garantia.dt_finGarantia,
      qn_diasAnticipacion: '30',
      qn_frecuenciaAnticipacion: '5',
      dt_fechaUltimoCambio: today,
      contratoID: this.contratosService.getIdContratoActivo()
    });
  }

  verPdf(url: any) {
    console.log(url);
    const modalRef = this.modalService.open(ShowPdfComponent, { size: 'xl' });
    modalRef.componentInstance.filePath = url;
  }
}

