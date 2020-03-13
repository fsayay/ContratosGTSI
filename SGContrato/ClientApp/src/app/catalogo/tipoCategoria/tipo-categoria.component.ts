import { Component, OnInit } from '@angular/core';
import { Tipo, Seccion } from '../../model.component';
import { CatalogoService } from '../catalogo.service';
import { FormTipoComponent } from '../../formularios/formTipo/form-tipo.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tipo-categoria',
  templateUrl: './tipo-categoria.component.html',
  styleUrls: ['./tipo-categoria.component.css']
})
export class TipoCategoriaComponent implements OnInit {

  public tipos: Tipo[];
  public nuevoTipo: Tipo;
  public editTipo: Tipo;
  public categoriaActual: Seccion;

  //valores spinners
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  showSpinner = true;

  constructor(private modalService: NgbModal, private catalogoService: CatalogoService, private toastr: ToastrService) { }

  ngOnInit() {
    this.categoriaActual = this.catalogoService.getCategoriaActual();
    this.cargarDatos()
  }

  cargarDatos() {
    this.tipos = this.categoriaActual.tipos; 
  }

  openFormModal() {
    const modalRef = this.modalService.open(FormTipoComponent);
    modalRef.componentInstance.tip = null; // should be the id
    modalRef.result.then((result) => {
      this.nuevoTipo = result;
      console.log(this.nuevoTipo);
      this.insertar();
    }).catch((error) => {
      console.log(error);
    });
  }

  insertar() {
    let tipo;
    this.catalogoService.insertTipo(this.nuevoTipo).subscribe(tipoDesdeWS => tipo = tipoDesdeWS, error => this.showError(), () => this.showSuccess("¡Ingreso de dato exitoso!!"));
  }

  editar() {
    let tipo;
    this.catalogoService.updateTipo(this.editTipo).subscribe(tipoDesdeWS => tipo = tipoDesdeWS, error => this.showError(), () => this.showSuccess("¡Actualizacion de dato exitoso!!"));
  }

  editarTipo(tipo: Tipo) {
    const modalRef = this.modalService.open(FormTipoComponent);
    modalRef.componentInstance.tip = tipo; // should be the id
    modalRef.result.then((result) => {
      this.editTipo = result;
      this.editar();
    }).catch((error) => {
      console.log(error);
    });
  }

  // Metodo para decirle al usuario que todo salio correcto
  showSuccess(mensaje: string) {
    this.toastr.success(mensaje, 'Success!');
    this.catalogoService.getSec(this.categoriaActual.seccionID.toString()).subscribe(tiposDesdeWS => this.categoriaActual = tiposDesdeWS, error => console.error(error), () => this.cargarDatos());    
  }

  showError() {
    this.toastr.error('A ocurrido un error en el servidor!', 'Error!');
  }
}

