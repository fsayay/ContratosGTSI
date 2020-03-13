import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../catalogo.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormUsuarioComponent } from '../../formularios/formUsuario/form-usuario.component';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})


export class UsuarioComponent implements OnInit {

  public usersrol: any;
  public nuevoUserRol: any;

  constructor(private catalogoService: CatalogoService, private modalService: NgbModal, private toastr: ToastrService) {
    
  }

  ngOnInit() {
    this.cargarDatos();    
  }

  cargarDatos() {
    this.catalogoService.getUserView().subscribe(usersrolDesdeWS => this.usersrol = usersrolDesdeWS, error => console.error(error), () => this.mostrarDatos());
  }

  mostrarDatos() {
    console.log(this.usersrol);
  }

  openFormModal() {
    const modalRef = this.modalService.open(FormUsuarioComponent);
    modalRef.componentInstance.tmpUserRol = null; // should be the id
    modalRef.result.then((result) => {
      console.log(result);
      this.insertar(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  insertar(user: any) {
    console.log(user);
    this.catalogoService.insertUserRol(user).subscribe(userRolDesdeWS => user = userRolDesdeWS, error => console.error(error), () => this.showSuccess("¡Ingreso de dato exitoso!!"));
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





