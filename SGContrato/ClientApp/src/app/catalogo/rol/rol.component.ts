import { Component, OnInit } from '@angular/core';
import { Rol } from '../../model.component';
import { CatalogoService } from '../catalogo.service';
import { FormRolComponent } from '../../formularios/formRol/form-rol.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css']
})
export class RolComponent implements OnInit {

  public roles: Rol;
  public nuevoRol: Rol;
  public editRol: Rol;

  //valores spinners
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  showSpinner = true;

  constructor(private modalService: NgbModal, private catalogoService: CatalogoService, private toastr: ToastrService) { }

  ngOnInit() {
    this.cargarDatos()
  }

  cargarDatos() {    
    this.catalogoService.getRoles().subscribe(rolesDesdeWS => this.roles = rolesDesdeWS, error => console.error(error), () => this.llenarTabla());
  }

  llenarTabla() {
    console.log(this.roles);
  }

  openFormModal() {
    const modalRef = this.modalService.open(FormRolComponent);
    modalRef.componentInstance.sec = null; // should be the id
    modalRef.result.then((result) => {
      this.nuevoRol = result;
      console.log(this.nuevoRol);
      this.insertar();
    }).catch((error) => {
      console.log(error);
    });
  }

  insertar() {
    let rol;
    this.catalogoService.insertRol(this.nuevoRol).subscribe(rolDesdeWS => rol = rolDesdeWS, error => this.showError(), () => this.showSuccess("¡Ingreso de dato exitoso!!"));
  }

  editar() {
    let rol;
    this.catalogoService.updateRol(this.editRol).subscribe(rolDesdeWS => rol = rolDesdeWS, error => this.showError(), () => this.showSuccess("¡Actualizacion de dato exitoso!!"));
  }

  editarRol(rol: Rol) {
    console.log(rol);
    const modalRef = this.modalService.open(FormRolComponent);
    modalRef.componentInstance.rol1 = rol; // should be the id
    modalRef.result.then((result) => {
      this.editRol = result;
      console.log(this.editRol);
      this.editar();
    }).catch((error) => {
      console.log(error);
    });
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

