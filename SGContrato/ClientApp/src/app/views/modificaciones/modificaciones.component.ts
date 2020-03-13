import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContratosService } from '../contratos/contratos.service';
import { GarantiasService } from '../garantias/garantias.service';
import { Contrato, valorModificado, fechaModificado } from '../../model.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Modificacion } from '../../model.component';
import { ModificacionesService } from './modificaciones.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ModificacionDialogComponent } from '../../formularios/modificacion-dialog/modificacion-dialog.component';
import { switchMap } from 'rxjs/operators';
import { forkJoin, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'app-modificaciones',
    templateUrl: './modificaciones.component.html',
    styleUrls: ['./modificaciones.component.css']
})
export class ModificacionesComponent {
  public modificaciones: Modificacion[];
  public tabla: any = [{
    motivo: '',
    datoAnterior: '',
    datoActual: '',
    fecha:''
  }];
  public contrato: Contrato;
  public nuevaModificacion: Modificacion;
  public nuevoValor: valorModificado;
  public nuevaFecha: fechaModificado;
  public formModificacion: FormGroup;
  public formGroup: FormGroup;
  public formValor: FormGroup;
  public formFecha: FormGroup;
  public usuario: any;

  constructor(private modificacionService: ModificacionesService,
    private dialog: MatDialog,
    private garantiasService: GarantiasService,
    private modalService: NgbModal,
    private contratosService: ContratosService,
    private modificacionesService: ModificacionesService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.crearFormModificacion();
    this.crearFormValorModificado();
    this.crearFormFechaModificado();
    this.modificacionesService.getModificaciones(this.contratosService.getIdContratoActivo())
      .subscribe(contratoConModificacionesDesdeWS => this.contrato = contratoConModificacionesDesdeWS,
        error => console.error(error), () => this.cargarDatos());
  }

  crearFormModificacion() {
    const dateLength = 10;
    const today = new Date().toISOString().substring(0, dateLength);
    this.formModificacion = this.fb.group({
      ID: 0,
      qn_tipoModificacion: '',
      txt_motivoModificacion: '',
      dt_fechaUltimoCambio: today,
      contratoID: this.contratosService.getIdContratoActivo()
    });
  }
  crearFormValorModificado() {
    this.formValor = this.fb.group({
      ID: 0,
      vm_valorAnterior: 0,
      vm_valorActual: 0,
      modificacionID: 0
    });
  }
  crearFormFechaModificado() {
    this.formFecha = this.fb.group({
      ID: 0,
      dt_fechaAnterior: '',
      dt_fechaActual: '',
      modificacionID: 0
    });
  }


  cargarDatos() {
    this.modificaciones = this.contrato.modificaciones;
    console.log(this.modificaciones);
    this.modificaciones.forEach(
      x => {
        this.modificacionesService.getValorModificado(x.id.toString()).subscribe(valor => x.valorModificado = valor);
        this.modificacionesService.getFechaModificado(x.id.toString()).subscribe(valor => x.fechaModificado = valor);
      }
    );
  }
  
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(ModificacionDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => this.crearFormularios(data)
    );
  }

  crearFormularios(data: any) {
    this.formModificacion.patchValue(data);
    this.nuevaModificacion = this.formModificacion.value;
    this.formValor.patchValue(data);
    this.nuevoValor = this.formValor.value;
    this.formFecha.patchValue(data);
    this.nuevaFecha = this.formFecha.value;
    this.modificacionService.insertModificacion(this.nuevaModificacion)
      .subscribe(dataFromServiceOne => {
        this.nuevaFecha.modificacionID = dataFromServiceOne.id;
        console.log(this.nuevaFecha);
        this.nuevoValor.modificacionID = dataFromServiceOne.id;
        const requests: Observable<any>[] = [];         
        const req1 = this.modificacionesService.insertFechaModificar(this.nuevaFecha);
      
        const req2 = this.modificacionesService.insertValorModificar(this.nuevoValor);
          requests.push(req1);
          requests.push(req2);
        forkJoin(requests).subscribe(
          arr => [{ req1 }, { req2 }], error => console.error(error), () => this.showSuccess("¡Ingreso de dato exitoso!!")
          );
        })             
  }

  // Metodo para decirle al usuario que todo salio correcto
  showSuccess(mensaje: string) {
    this.toastr.success(mensaje, 'Success!');
    this.modificacionesService.getModificaciones(this.contratosService.getIdContratoActivo())
      .subscribe(contratoConModificacionesDesdeWS => this.contrato = contratoConModificacionesDesdeWS,
        error => console.error(error), () => this.cargarDatos());
  }

  showError() {
    this.toastr.error('A ocurrido un error en el servidor!', 'Error!');
  }  
}
