import { Component } from '@angular/core';
import { FormaPago, Pago, Tipo } from '../../model.component';
import { ContratosService } from '../contratos/contratos.service';
import { PagosService } from './pagos.service';
import { Router } from '@angular/router';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { PagosDialogComponent } from '../../formularios/pagos-dialog/pagos-dialog.component';

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

  constructor(private contratosService: ContratosService, private dialog: MatDialog, private pagosService: PagosService, private router: Router) {

  }

  ngOnInit() {
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

    console.log(datos);

    //this.pagosService.insertFormaPago(this.formaPago).subscribe(x => {
    //  this.nuevosPagos.forEach((y) => {
    //    y.formaPagoID = x.id;
    //    x.pagos = y;
    //  });
      
    //  let pagos;
      //this.pagosService.insertPagos(x).subscribe((datos: any) => pagos = datos, error => console.error(error), () => this.cargarDatos());
    //});
  }  
}

