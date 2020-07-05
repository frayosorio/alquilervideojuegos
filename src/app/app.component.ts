import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public paginas = [
    {
      titulo: 'Listas', url: '', icono: 'assets/icon/Listas.png', mostrarDetalles:false,
      subPaginas: [
        { titulo: 'Clientes', url: '/folder/Clientes', icono: 'assets/icon/Cliente.png' },
        { titulo: 'Empresas', url: '/folder/Clientes', icono: 'assets/icon/Empresa.png' },
        { titulo: 'Titulos', url: 'titulos', icono: 'assets/icon/Titulo.png' }
      ]
    },
    { titulo: 'Alquiler', url: '/folder/Alquiler', icono: 'assets/icon/Alquiler.png',  mostrarDetalles:false, subPaginas: null },
    {
      titulo: 'Reportes', url: '/folder/Reportes', icono: 'assets/icon/Reportes.png', mostrarDetalles:false,
      subPaginas: [
        { titulo: 'Clientes', url: '/folder/Clientes', icono: 'assets/icon/Clientes.png' },
        { titulo: 'Empresas', url: '/folder/Clientes', icono: 'assets/icon/Empresas.png' },
        { titulo: 'Titulos', url: '/folder/Clientes', icono: 'assets/icon/Titulos.png' }
      ]
    }
  ];

   
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.paginas.findIndex(pagina => pagina.titulo.toLowerCase() === path.toLowerCase());
    }
  }

  toggleDetails(p) {
    if (p.mostrarDetalles) {
      p.mostrarDetalles = false;
      p.icon = 'ios-arrow-down';
    } else {
      p.mostrarDetalles = true;
      p.icon = 'ios-arrow-up';

    }
  }

}
