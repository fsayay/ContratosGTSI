import { Component, Output, EventEmitter, Input } from '@angular/core';
import { InformesService } from '../../views/informes/informes.service';
import { ContratosService } from '../../views/contratos/contratos.service';
import { Informe, Contrato } from '../../model.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-formInformeMulta',
  templateUrl: './formInformeMulta.component.html',
  styleUrls: ['./formInformeMulta.component.css']
})
export class FormInformeMultaComponent {

  @Input() txt_codigoInforme: string;
  public informes: Informe[];
  public contrato: Contrato;

  constructor(private informesService: InformesService, private activeModal: NgbActiveModal, private contratosService: ContratosService) {
    this.informesService.getInformes(this.contratosService.getIdContratoActivo()).subscribe(contratoConInformesDesdeWS => this.contrato = contratoConInformesDesdeWS, error => console.error(error), () => this.mostrarInformes());
  }

  mostrarInformes()
  {
    this.informes = this.contrato.informes;
  }

  private submitForm(txt_codigoInforme: string) {
    this.activeModal.close(txt_codigoInforme);
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

}


