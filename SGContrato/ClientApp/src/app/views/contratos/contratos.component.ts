import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contrato, Seccion, User } from '../../model.component';
import { ContratosService } from './contratos.service';
import { SideNavService } from '../sidenav/sidenav.service';

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.css']
})
export class ContratosComponent implements OnInit {

  usuario: any;
  contratos: Contrato[];
  categorias: Seccion[];
  contratoId: string;  
  showLoadingIndicator = true;

  constructor( private contratosService: ContratosService, private router: Router, private sidenavService: SideNavService) {}

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.sidenavService.setIsDisabled(false);
    this.contratosService.setContratoId('0');
    if (this.usuario[0].nombreRol == "Administrador-Contrato") {
      this.contratosService.getContratosAdmin(this.usuario[0].id).subscribe((data: any) => this.contratos = data);
    } else {
      this.contratosService.getContratos().subscribe((data: any) => this.contratos = data);
    }   
  }

  
  mostrarDetalle(contrato: Contrato) {
    localStorage.setItem('contratoActivo', JSON.stringify(contrato));
    if (contrato.qn_tipoContrato == 0 || contrato.qn_tipoContrato == null) {
      this.contratosService.setContratoIncompletoId(contrato.id);
      this.router.navigate(["/registrar-contrato"]);
    }
    else {
      if (this.usuario[0].rolID == 2) {
        this.sidenavService.setIsDisabled(true);
      }      
      this.contratosService.setContratoId(contrato.id.toString());
      this.router.navigate(["/DatosGenerales"]);
    }   
  }
}
