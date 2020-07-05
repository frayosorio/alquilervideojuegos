import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentanaModalComponent } from './ventana-modal.component';

@NgModule({
    imports: [CommonModule],
    declarations: [VentanaModalComponent],
    exports: [VentanaModalComponent]
})
export class VentanaModalModule { }