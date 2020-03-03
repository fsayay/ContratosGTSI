import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MultasService } from './multas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contrato, Multa, Historial } from '../../model.component';
import { NgbActiveModal, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContratosService } from '../contratos/contratos.service';
import { FormMultaComponent } from '../../formularios/formMulta/form-multa.component';
import { ToastrService } from 'ngx-toastr';
import { HistorialService } from '../historial/historial.service';

@Component({
    selector: 'app-multas',
    templateUrl: './multas.component.html',
    styleUrls: ['./multas.component.css']
})


export class MultasComponent {

  public contrato: Contrato;
  public multas: Multa;
  public nuevaMulta: Multa;
  public editMulta: Multa;
  public historial: Historial;
  public formHistorial: FormGroup;

  constructor(private historialService: HistorialService, private contratosService: ContratosService, public activeModal: NgbActiveModal, private modalService: NgbModal, private multasService: MultasService, private fb: FormBuilder, private router: Router, private toastr: ToastrService) {}

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    this.multasService.getMultasView(this.contratosService.getIdContratoActivo()).subscribe(MultasDesdeWS => this.multas = MultasDesdeWS, error => console.error(error), () => this.mostrarDatos());
  }

  mostrarDatos() {
    console.log(this.multas);
  }
  
  openFormModal() {
    const modalRef = this.modalService.open(FormMultaComponent);
    modalRef.componentInstance.multa = null; // should be the id
    modalRef.result.then((result) => {
      this.nuevaMulta = result;
      this.insertar();
    }).catch((error) => {
      console.log(error);
    });
  }

  update(multa: Multa) {
    console.log(multa);
    const modalRef = this.modalService.open(FormMultaComponent);
    modalRef.componentInstance.multa = multa; // se podra enviar un objeto?????????
    modalRef.result.then((result) => {
      this.editMulta = result;
      console.log(this.editMulta);
      this.editar();
    }).catch((error) => {
      console.log(error);
    });
  }
  
  public insertar() {
    let multa;
    this.crearHistorial("Se ingreso nueva multa del informe " + this.nuevaMulta.txt_codigoInforme + " por un valor de " + this.nuevaMulta.vm_montoMulta);
    this.multasService.insertMulta(this.nuevaMulta).subscribe(multaDesdeWS => multa = multaDesdeWS, error => this.showError(), () => this.showSuccess("¡Ingreso de dato exitoso!!"));
  }

  public editar() {
    let multa;
    this.crearHistorial("Se modifico la multa del informe " + this.editMulta.txt_codigoInforme);
    this.multasService.updateMulta(this.editMulta).subscribe(multaDesdeWS => multa = multaDesdeWS, error => this.showError(), () => this.showSuccess("¡Actualizacion de dato exitoso!!"));
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
      txt_seccionHistorial: 'MULTA',
      txt_accionHistorial: mensaje,
      dt_fechaUltimoCambio: today,
      contratoID: this.contratosService.getIdContratoActivo()
    });
  }
  
}


