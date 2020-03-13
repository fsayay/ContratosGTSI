import { Component, Inject } from '@angular/core';
import { ActasService } from './actas.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Acta, Tipo, Contrato, Historial, Seccion } from '../../model.component';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ContratosService } from '../contratos/contratos.service';
import { FormActaComponent } from '../../formularios/formActa/form-acta.component';
import { HistorialService } from '../historial/historial.service';
import { SideNavService } from '../sidenav/sidenav.service';
import { ToastrService } from 'ngx-toastr';
import { ShowPdfComponent } from '../showPdfComponent/show-pdf.component';


@Component({
    selector: 'app-actas',
    templateUrl: './actas.component.html',
    styleUrls: ['./actas.component.css']
})
export class ActasComponent {

  public historial: Historial;
  public actas: Acta;
  public tiposActa: Tipo;
  public nuevaActa: Acta;
  public editActa: Acta;
  public formHistorial: FormGroup;
  public usuario: any;

  constructor(private historialService: HistorialService, private sidenavService: SideNavService, private modalService: NgbModal, private contratosService: ContratosService, private actasService: ActasService, private fb: FormBuilder, private router: Router, private toastr: ToastrService) {}

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.cargarDatos();
  }

  public cargarDatos() {
    this.actasService.getActasView(this.contratosService.getIdContratoActivo()).subscribe(ActasDesdeWS => this.actas = ActasDesdeWS, error => console.error(error), () => this.mostrarDatos());
  }

  mostrarDatos() {
    console.log(this.actas);
  }

  openFormModal() {
    let acta: Acta;
    const modalRef = this.modalService.open(FormActaComponent);
    modalRef.componentInstance.acta = null;
    modalRef.result.then((result) => {
      this.nuevaActa = result;
      console.log(this.nuevaActa);
      this.insertar();
    }).catch((error) => {
      console.log(error);
    });
  }

  updateActa(acta: Acta) {
    const modalRef = this.modalService.open(FormActaComponent);
    modalRef.componentInstance.acta = acta;
    modalRef.result.then((result) => {
      this.editActa = result;
      console.log(this.editActa);
      this.editar();
    }).catch((error) => {
      this.showError();
    });
  }

  public insertar() {
    let acta;
    this.crearHistorial("Se ingreso nueva acta con codigo " + this.nuevaActa.txt_codigoActa);
    this.nuevaActa.txt_archivoActa = this.nuevaActa.txt_archivoActa.replace(/\\/g, "/");
    this.actasService.insertActa(this.nuevaActa).subscribe(actaDesdeWS => acta = actaDesdeWS, error => this.showError(), () => this.showSuccess("¡Ingreso de dato exitoso!!"));
  }

  public editar() {
    let acta;
    this.crearHistorial("Se modifico el acta con codigo " + this.editActa.txt_codigoActa);
    this.editActa.txt_archivoActa = this.editActa.txt_archivoActa.replace(/\\/g, "/");
    this.actasService.updateActa(this.editActa).subscribe(actaDesdeWS => acta = actaDesdeWS, error => this.showError(), () => this.showSuccess("¡Actualizacion de dato exitoso!!"));
  }

  // Metodo para decirle al usuario que todo salio correcto
  showSuccess(mensaje: string) {
    this.toastr.success(mensaje, 'Success!');
    this.cargarDatos();
  }

  showError() {
    this.toastr.error('A ocurrido un error en el servidor!', 'Error!');
  }
  //"Se ingreso nueva acta con codigo " + this.nuevaActa.txt_codigoActa ;
  crearHistorial(mensaje: string) {
    this.historialForm(mensaje);
    this.historial = this.formHistorial.value;
    this.historialService.insertHistorial(this.historial).subscribe((data: any)=>this.historial=data);
  }

  public historialForm(mensaje: string) {
    const dateLength = 10;
    const today = new Date().toISOString().substring(0, dateLength);
    this.formHistorial = this.fb.group({
      ID: 0,
      txt_seccionHistorial: 'ACTA',
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
