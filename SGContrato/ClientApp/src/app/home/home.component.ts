import { Component } from '@angular/core';
import { ContratosService } from '../views/contratos/contratos.service';
import { AuthUser, Rol } from '../model.component';
import { AuthService } from '../services/user.services';
import { Router } from '@angular/router';
import { CatalogoService } from '../catalogo/catalogo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  constructor(private userService: AuthService, private router: Router, private catalogoService: CatalogoService) { }

  

}
