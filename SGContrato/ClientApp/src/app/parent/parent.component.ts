import { OnInit, Component } from '@angular/core';
import { VencimientoService } from '../services/vencimiento.services';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css']
})

export class ParentComponent implements OnInit {
    vencimientos$: any[] = [];

    constructor(private vencimientoServices: VencimientoService) {}
    ngOnInit(): void {
        this.vencimientoServices.emitPeriodically().subscribe(
            venc  => {
                this.vencimientos$.push(venc);
                setTimeout(() => {
                    this.vencimientos$.pop();
                }, 8000);
            }
        );
    }
}
