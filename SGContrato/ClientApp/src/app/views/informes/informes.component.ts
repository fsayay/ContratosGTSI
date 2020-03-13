import { Component } from '@angular/core';
import { InformesService } from './informes.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Contrato, Informe, Tipo, Historial } from '../../model.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContratosService } from '../contratos/contratos.service';
import { FormInformeComponent } from '../../formularios/formInforme/form-informe.component';
import { ToastrService } from 'ngx-toastr';
import { HistorialService } from '../historial/historial.service';
import { ShowPdfComponent } from '../showPdfComponent/show-pdf.component';

@Component({
    selector: 'app-informes',
    templateUrl: './informes.component.html',
    styleUrls: ['./informes.component.css']
})
export class InformesComponent {
  public contrato: Contrato;
  public informes: Informe;
  public tiposInforme: Tipo;
  public nuevoInforme: Informe;
  public editInforme: Informe;
  public historial: Historial;
  public formHistorial: FormGroup;
  public usuario: any;
  
  constructor(private historialService: HistorialService, private modalService: NgbModal, private contratosService: ContratosService, private informesService: InformesService, private fb: FormBuilder, private router: Router, private toastr: ToastrService) {}

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.cargarDatos();
  }

  cargarDatos() {
    this.informesService.getInformesView(this.contratosService.getIdContratoActivo()).subscribe(InformesDesdeWS => this.informes = InformesDesdeWS, error => console.error(error), () => this.mostrarDatos());    
  }

  mostrarDatos() {
    console.log(this.informes)
  }

  openFormModal() {
    const modalRef = this.modalService.open(FormInformeComponent);
    modalRef.componentInstance.informe = null; // should be the id
    modalRef.result.then((result) => {
      this.nuevoInforme = result;
      this.insertar();
    }).catch((error) => {
      console.log(error);
    });
  }

  updateInforme(informe: Informe) {
    const modalRef = this.modalService.open(FormInformeComponent);
    modalRef.componentInstance.informe = informe; // should be the id
    modalRef.result.then((result) => {
      this.editInforme = result;
      this.editar();
    }).catch((error) => {
      console.log(error);
    });
  }

  public insertar() {
    let informe;
    this.crearHistorial("Se ingreso el informe con codigo " + this.nuevoInforme.txt_codigoInforme);
    this.nuevoInforme.txt_archivoInforme = this.nuevoInforme.txt_archivoInforme.replace(/\\/g, "/");
    this.informesService.insertInforme(this.nuevoInforme).subscribe(informeDesdeWS => informe = informeDesdeWS, error => this.showError(), () => this.showSuccess("¡Ingreso de dato exitoso!!"));
  }

  public editar() {
    let informe;
    this.crearHistorial("Se modifico el informe con codigo " + this.editInforme.txt_codigoInforme);
    this.editInforme.txt_archivoInforme = this.editInforme.txt_archivoInforme.replace(/\\/g, "/");
    this.informesService.updateInforme(this.editInforme).subscribe(informeDesdeWS => informe = informeDesdeWS, error => this.showError(), () => this.showSuccess("¡Actualizacion de dato exitoso!!"));
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
      txt_seccionHistorial: 'INFORME',
      txt_accionHistorial: mensaje,
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


