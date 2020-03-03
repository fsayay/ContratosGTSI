import { OnInit, Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-show-pdf',
    templateUrl: './show-pdf.component.html'
})

export class ShowPdfComponent implements OnInit {

    @Input() filePath: string;
    @Input() width = 460;
    @Input() height = 480;
    sanitizedFilePath: any;

  ngOnInit(): void {
    console.log(this.filePath);
        if (this.filePath != null) {
          const trimmedName = this.filePath.split('\\');
          console.log(trimmedName);
            this.sanitizedFilePath = this.domSanitizer.bypassSecurityTrustResourceUrl('/Upload/${trimmedName[trimmedName.length - 1]}');
        }

    }

    constructor(private domSanitizer: DomSanitizer,
        private activeModal: NgbActiveModal,
        ) { }

}
