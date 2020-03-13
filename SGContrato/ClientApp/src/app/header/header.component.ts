import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User, AuthUser, Rol, UserRol } from '../model.component';
import { SideNavService } from '../views/sidenav/sidenav.service';
import { AuthService } from '../services/user.services';
import { CatalogoService } from '../catalogo/catalogo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent
{
  rolUsuario: UserRol; 
  roles: Rol;
  isExpanded = false;
  usuario: User;
  user: AuthUser;
  ultimoAcceso: string;
  isLoggedIn: boolean;

  constructor(private catalogoService: CatalogoService, private userService: AuthService, private router: Router, private sidenavService: SideNavService) {
    this.isLoggedIn = false;  
  }

  
 collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }


  ngOnInit() {
    let usuario;
    this.userService.getUser().subscribe((data: any) => usuario = data, error=>console.error(error),()=>this.cargarData(usuario));    
  }

  cargarData(usuario: any) {
    console.log(usuario);
    this.usuario = usuario.usuario;
    console.log(this.usuario);
    localStorage.setItem('usuario', JSON.stringify(this.usuario));
    this.ultimoAcceso = usuario.ultimoAcceso;
    console.log(this.usuario[0].nombre);
    this.isLoggedIn = true;
    this.catalogoService.getRoles().subscribe(data => this.roles = data, error => console.error(error), () => this.cargarUserRol(this.usuario[0].id));
  }

  cargarUserRol(userId: string) {
    this.catalogoService.getUserRolID(userId).subscribe(data => this.rolUsuario = data,error=>console.error(error),()=>this.comparar())
  }

  comparar() {
    if (this.rolUsuario[0].rolID === 1) {
      this.router.navigate(['/Configuracion']);
    } else {
      this.router.navigate(['/contratos']);
    }
  }

  public userAuthenticated() {
    console.log(this.user);
    this.isLoggedIn = true;
    this.router.navigate(['/contratos']);
  }





}


