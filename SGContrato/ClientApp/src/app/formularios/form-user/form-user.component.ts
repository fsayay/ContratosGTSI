import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../model.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CatalogoService } from '../../catalogo/catalogo.service';


@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {

  @Input() user: string;
  public users: any;
  public isUser: boolean = false;
  public usuariosFiltrados: any[];
  
  constructor(private catalogoService: CatalogoService,
    private activeModal: NgbActiveModal) {
    
  }

  ngOnInit() {
    if (this.user != null) {
      this.isUser = !this.isUser;
      this.catalogoService.getUserView().
        subscribe(datos => {
          this.users = datos;
          this.usuariosFiltrados = [];
          for (let u in this.users) {
            if (this.users[u].nombreRol == this.user) {
              this.usuariosFiltrados.push(this.users[u]);
            }
          }
        });
      
    } else {
      this.catalogoService.getUsers().subscribe(usersDesdeWS => this.users = usersDesdeWS, error => console.error(error), () => this.tablaUsuarios());      
    }

  }

  tablaUsuarios() {
    console.log(this.users);
  }

  private submitForm(user: any) {
    console.log(user);
    this.activeModal.close(user);
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

}
