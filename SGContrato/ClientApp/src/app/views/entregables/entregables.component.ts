import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EntregablesService } from './entregables.service';
import { ContratosService } from '../contratos/contratos.service';
import { GarantiasService } from '../garantias/garantias.service';
import { Contrato, Entregable, Tipo, Seccion, Historial } from '../../model.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormEntregableComponent } from '../../formularios/formEntregable/form-entregable.component';
import { SideNavService } from '../sidenav/sidenav.service';
import { ToastrService } from 'ngx-toastr';
import { HistorialService } from '../historial/historial.service';
import { ShowPdfComponent } from '../showPdfComponent/show-pdf.component';

@Component({
    selector: 'app-entregables',
    templateUrl: './entregables.component.html',
    styleUrls: ['./entregables.component.css']
})
export class EntregablesComponent {

  public contrato: Contrato;
  public entregables: Entregable;
  public nuevoEntregable: Entregable;
  public editEntregable: Entregable;
  public formGroup: FormGroup;
  public tiposEntregable: Tipo[];
  public seccion: Seccion;
  public historial: Historial;
  public formHistorial: FormGroup;
  public usuario: any;
  
  constructor(private sidenavService: SideNavService, private historialService: HistorialService, private modalService: NgbModal, private contratosService: ContratosService, private entregablesService: EntregablesService, private fb: FormBuilder, private router: Router, private toastr: ToastrService) {}

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.cargarDatos();
  }  

  cargarDatos() {
    this.entregablesService.getEntregablesView(this.contratosService.getIdContratoActivo()).subscribe(EntregablesDesdeWS => this.entregables = EntregablesDesdeWS, error => console.error(error), () => this.mostrarDatos());
  }

  mostrarDatos() {
    console.log(this.entregables);
  }

  openFormModal() {
    const modalRef = this.modalService.open(FormEntregableComponent);
    modalRef.componentInstance.entregable = null; // should be the id
    modalRef.result.then((result) => {
      this.nuevoEntregable = result;
      this.insertar();
    }).catch((error) => {
      console.log(error);
    });
  }

  updateEntregable(entregable: Entregable)
  {
    const modalRef = this.modalService.open(FormEntregableComponent);
    modalRef.componentInstance.entregable = entregable; // should be the id
    modalRef.result.then((result) => {
      this.editEntregable = result;
      this.editar();
    }).catch((error) => {
      console.log(error);
    });
  }

  public insertar() {
    let entregable;
    this.crearHistorial("Se ingreso nuevo entregable " + this.nuevoEntregable.txt_descripcionEntregable);
    this.nuevoEntregable.txt_archivoEntregable = this.nuevoEntregable.txt_archivoEntregable.replace(/\\/g, "/");
    this.entregablesService.insertEntregable(this.nuevoEntregable).subscribe(entregableDesdeWS => entregable = entregableDesdeWS, error => this.showError(), () => this.showSuccess("¡Ingreso de dato exitoso!!"));
  }

  public editar() {
    let entregable;
    this.crearHistorial("Se modifico el entregable " + this.editEntregable.txt_descripcionEntregable);
    this.editEntregable.txt_archivoEntregable = this.editEntregable.txt_archivoEntregable.replace(/\\/g, "/");
    this.entregablesService.updateEntregable(this.editEntregable).subscribe(entregableDesdeWS => entregable = entregableDesdeWS, error => this.showError(), () => this.showSuccess("¡Actualizacion de dato exitoso!!"));
  }

  // Metodo para decirle al usuario que todo salio correcto
  showSuccess(mensaje: string) {
    this.toastr.success(mensaje, 'Success!');
    this.entregablesService.getEntregables(this.contratosService.getIdContratoActivo()).subscribe(contratoConEntregablesDesdeWS => this.contrato = contratoConEntregablesDesdeWS, error => console.error(error), () => this.cargarDatos());
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
      txt_seccionHistorial: 'ENTREGABLES',
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




