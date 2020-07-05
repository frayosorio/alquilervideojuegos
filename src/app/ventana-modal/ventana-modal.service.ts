import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class VentanaModalService {
    private ventanasModales: any[] = [];

    agregar(ventanaModal: any) {
        // Agrega una ventana modal al vector de ventanas modales activas
        this.ventanasModales.push(ventanaModal);
    }

    eliminar(id: string) {
        // retira ventana modal del vector de ventanas modales activas
        //this.ventanasModales = this.ventanasModales.filter(x => x.id !== id);
        this.ventanasModales.forEach((ventanaModal, i) => {
            if (ventanaModal.indice === id) this.ventanasModales.splice(i, 1);
          });

    }

    abrir(id: string) {
        // Abre la ventana modal especificada por id
        const ventanaModal = this.ventanasModales.find(x => x.id === id);
        ventanaModal.abrir();
    }

    cerrar(id: string) {
        // Cierra la ventana modal especificada por id
        const ventanaModal = this.ventanasModales.find(x => x.id === id);
        ventanaModal.cerrar();
    }
}