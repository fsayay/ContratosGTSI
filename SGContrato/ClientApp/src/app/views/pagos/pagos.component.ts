import { Component } from '@angular/core';
import { FormaPago, Pago, Tipo } from '../../model.component';
import { ContratosService } from '../contratos/contratos.service';
import { PagosService } from './pagos.service';
import { Router } from '@angular/router';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { PagosDialogComponent } from '../../formularios/pagos-dialog/pagos-dialog.component';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-pagos',
    templateUrl: './pagos.component.html',
    styleUrls: ['./pagos.component.css']
})
export class PagosComponent {
  public nuevosPagos: Pago[]
  public pagos: Pago;
  public formaPago: FormaPago;
  public nuevaFormaPago: FormaPago;
  public usuario: any;

  constructor(private contratosService: ContratosService,
    private dialog: MatDialog,
    private toastr: ToastrService,
    private datePipe: DatePipe,
    private pagosService: PagosService,
    private router: Router) {

  }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.cargarDatos();    
  }

  public cargarDatos() {
    let formaPago;
    this.pagosService.getFormaPago(this.contratosService.getIdContratoActivo()).subscribe(formaPagoDesdeWS => formaPago = formaPagoDesdeWS, error => console.error(error), () => this.llenarTabla(formaPago));
  }

  public llenarTabla(formaPago: FormaPago) {
    this.formaPago = formaPago;
    this.pagos = this.formaPago.pagos;
  }

  openDialog() {
    let pagos: FormaPago;
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners'
    };

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    dialogConfig.width = '500px';
 
    const dialogRef = this.dialog.open(PagosDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        this.ingresarDatos(data);
      }

    );
  }
  
  ingresarDatos(datos: FormaPago) {
    let formaPago = datos;
    console.log(formaPago);
    for (let pago in formaPago.pagos) {
      formaPago.pagos[pago].dt_tentativaPago = this.datePipe.transform(formaPago.pagos[pago].dt_tentativaPago, "yyyy-MM-dd");
    }
    this.pagosService.insertFormaPago(formaPago).subscribe(data => formaPago = data, error => this.showError(), () => this.showSuccess("¡¡ Ingreso de Datos Exitoso !!"));
    
  }

  // Metodo para decirle al usuario que todo salio correcto
  showSuccess(mensaje: string) {
    this.toastr.success(mensaje, 'Success!');
    this.cargarDatos();
  }

  showError() {
    this.toastr.error('A ocurrido un error en el servidor!', 'Error!');
  }

}

