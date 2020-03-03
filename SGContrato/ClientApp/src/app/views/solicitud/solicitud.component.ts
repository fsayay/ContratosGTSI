import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { ContratosService } from '../contratos/contratos.service';
import { Router } from '@angular/router';
import { Contrato, Garantia, FormaPago, Multa, Informe, Acta, Entregable, Modificacion, Historial, Vencimiento, Solicitud, Seccion, User } from '../../model.component';
import { MatTableDataSource, MatPaginatorModule, MatSort, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormSolicitudComponent } from '../../formularios/formSolicitud/form-solicitud.component';
import { CatalogoService } from '../../catalogo/catalogo.service';


/**
 * @title Table with selection
 */
@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})

export class SolicitudComponent {

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  
  //variables
  isContractAdmin: boolean = true;
  isUASAdmin: boolean = false;
  usuario: any;

  contratos: Contrato[];
  displayedColumns = ['select', 'id', 'txt_codigoContrato', 'txt_objetoContratacion', 'txt_nombreProveedor', "txt_rucProveedor"];
  displayedColumns1 = ['txt_codigoSolicitud', 'qn_cantContratos', 'txt_motivoSolicitud', 'txt_admSolicitante', "txt_admRecomendado"];
  dataSource: any;

  categorias: Seccion[];
  nuevaSolicitud: Solicitud;

 // displayedColumns: string[] = ['select', 'ID', 'txt_codigoContrato', 'qn_proveedor', 'dt_fechaSuscripcion'];
 // dataSource = new MatTableDataSource<PeriodicElement>(this.contratos);
  selection = new SelectionModel<Contrato>(true, []);

  constructor(private catalogoService: CatalogoService, private modalService: NgbModal, private contratosService: ContratosService, private router: Router, private toastr: ToastrService) {
    
  }  

  ngOnInit() {
    this.renderDataTable();
  }

  renderDataTable() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    console.log(this.usuario);
    this.contratosService.getContratosAdmin(this.usuario[0].id)
      .subscribe(x => {
        console.log(x);
        this.dataSource = new MatTableDataSource();
        this.dataSource.data = x;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

      },
        error => {
          console.log('Se produjo un error en el servidor!' + error);
        });    
  } 

  //Metodo para filtrar
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  /** Whether the number of selected elements matches the total number of rows. */
  
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  
  checkboxLabel(row?: Contrato): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.ID}`;
  }

  openFormModal() {
    const modalRef = this.modalService.open(FormSolicitudComponent);
    modalRef.componentInstance.cantContratos = this.selection.selected.length; // should be the id
    modalRef.result.then((result) => {
      this.nuevaSolicitud = result;
      console.log(this.nuevaSolicitud);
      this.insertar();
    }).catch((error) => {
      console.log(error);
    });
  }

  insertar() {
    console.log(this.nuevaSolicitud);
    let categoria;
    this.showSuccess('¡ Su solicitud fue enviado con exito!!');
    this.masterToggle();


    //this.catalogoService.insertSeccion(this.nuevaCategoria).subscribe(categoriaDesdeWS => categoria = categoriaDesdeWS, error => this.showError(), () => this.showSuccess("¡Ingreso de dato exitoso!!"));
  }


  // Metodo para decirle al usuario que todo salio correcto
  showSuccess(mensaje: string) {
    this.toastr.success(mensaje, 'Success!');
    //this.cargarDatos();
    this.renderDataTable();
  }

  showError() {
    this.toastr.error('A ocurrido un error en el servidor!', 'Error!');
  }
  
}
