import { Component, OnInit } from '@angular/core';
import { Seccion } from '../../model.component';
import { CatalogoService } from '../catalogo.service';
import { FormSeccionComponent } from '../../formularios/formSeccion/form-seccion.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  public categorias: Seccion;
  public nuevaCategoria: Seccion;
  public editCategoria: Seccion;

  //valores spinners
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  showSpinner = true;

  constructor(private modalService: NgbModal, private router: Router, private catalogoService: CatalogoService, private toastr: ToastrService) { }

  ngOnInit() {
    this.cargarDatos()
  }

  cargarDatos() {
    this.catalogoService.getSeccion().subscribe(categoriasDesdeWS => this.categorias = categoriasDesdeWS, error => console.error(error), () => this.llenarTabla());
  }

  llenarTabla() {
    console.log(this.categorias);
  }

  openFormModal() {
    const modalRef = this.modalService.open(FormSeccionComponent);
    modalRef.componentInstance.sec = null; // should be the id
    modalRef.result.then((result) => {
      this.nuevaCategoria = result;
      console.log(this.nuevaCategoria);
      this.insertar();
    }).catch((error) => {
      console.log(error);
    });
  }

  insertar() {
    console.log(this.nuevaCategoria);
    let categoria;
    this.catalogoService.insertSeccion(this.nuevaCategoria).subscribe(categoriaDesdeWS => categoria = categoriaDesdeWS, error => this.showError(), () => this.showSuccess("¡Ingreso de dato exitoso!!"));
  }

  editar() {
    let categoria;
    this.catalogoService.updateSeccion(this.editCategoria).subscribe(categoriaDesdeWS => categoria = categoriaDesdeWS, error => this.showError(), () => this.showSuccess("¡Actualizacion de dato exitoso!!"));
  }

  editarCategoria(categoria: Seccion) {
    console.log(categoria);
    const modalRef = this.modalService.open(FormSeccionComponent);
    modalRef.componentInstance.sec = categoria; // should be the id
    modalRef.result.then((result) => {
      this.editCategoria = result;
      console.log(this.editCategoria);
      this.editar();
    }).catch((error) => {
      console.log(error);
    });
  }

  mostrarTipos(categoria: Seccion) {
    this.catalogoService.setCategoria(categoria);
    this.router.navigate(["/Tipos"]);
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
