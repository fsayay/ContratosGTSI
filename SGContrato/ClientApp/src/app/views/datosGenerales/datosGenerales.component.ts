import { Component } from '@angular/core';
import { ContratosService } from '../contratos/contratos.service';
import { Contrato, Tipo, unidad } from '../../model.component';
import { ShowPdfComponent } from '../showPdfComponent/show-pdf.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datosGenerales',
  templateUrl: './datosGenerales.component.html',
  styleUrls: ['./datosGenerales.component.css']
})

export class DatosGeneralesComponent {

  public contrato: Contrato;
  public unidad: unidad;

  unidades = [
    {
      ID: 2,
      id: 2,
      nombre: "FIEC",
      descripcion: "Unidad especializada en la compra de equipos tecnologicos",
      email: "fiec@espol.edu.ec"
    },
    {
      ID: 1,
      id: 1,
      nombre: "FICT",
      descripcion: "Unidad especializada en la compra de equipos para excavacion",
      email: "fict@espol.edu.ec"
    }

  ];


  constructor(private contratosService: ContratosService,
    private modalService: NgbModal,
    ) {
    
  }

  ngOnInit() {
    this.contratosService.getContratoView(this.contratosService.getIdContratoActivo()).subscribe(datos => {
      this.contrato = datos;
      this.unidad = this.unidades.find(unidad => unidad.id == this.contrato.qn_unidadConsolidadora);
    });
  }

  verPdf(url: any) {
    console.log(url);
    const modalRef = this.modalService.open(ShowPdfComponent, { size: 'xl' });
    modalRef.componentInstance.filePath = url;
  }
}
