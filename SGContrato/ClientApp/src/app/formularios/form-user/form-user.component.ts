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

  @Input() user: User;
  public users: User;

  constructor(private catalogoService: CatalogoService, private activeModal: NgbActiveModal) {
    this.catalogoService.getUsers().subscribe(usersDesdeWS => this.users = usersDesdeWS, error => console.error(error), () => this.tablaUsuarios());
  }

  ngOnInit() {
  }

  tablaUsuarios() {
    console.log(this.users);
  }

  private submitForm(user: User) {
    console.log(user);
    this.activeModal.close(user);
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

}
