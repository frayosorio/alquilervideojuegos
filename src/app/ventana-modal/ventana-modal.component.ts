import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

import { VentanaModalService } from './ventana-modal.service';

@Component({ 
    selector: 'ventana-modal', 
    templateUrl: 'ventana-modal.component.html', 
    styleUrls: ['ventana-modal.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class VentanaModalComponent implements OnInit, OnDestroy {
    @Input() id: string;
    private element: any;

    constructor(private ventadaModalService: VentanaModalService, private el: ElementRef) {
        this.element = el.nativeElement;
    }

    ngOnInit(): void {
        // Se asegura de que el atributo "id" exista
        if (!this.id) {
            console.error('La ventana modal debe tener un id');
            return;
        }

        // Mueve el elemento a la parte inferior de la página (justo antes de </body>) para que se pueda mostrar sobre todo lo demás
        document.body.appendChild(this.element);

        // cierre la ventana modal al hacer clic en segundo plano
        this.element.addEventListener('click', el => {
            if (el.target.className === 'ventana-modal') {
                this.cerrar();
            }
        });

        // Se añade así misma (La propia instancia de la ventana modal) al servicio para que sea accesible al controlador
        this.ventadaModalService.agregar(this);
    }

    // Removerse así misma rsel servicio cuando el componente sea destruido
    ngOnDestroy(): void {
        this.ventadaModalService.eliminar(this.id);
        this.element.remove();
    }

    // Abrir ventana modal
    abrir(): void {
        this.element.style.display = 'block';
        document.body.classList.add('ventana-modal-abrir');
    }

    // Cerra ventana modal
    cerrar(): void {
        this.element.style.display = 'none';
        document.body.classList.remove('ventana-modal-abrir');
    }
}