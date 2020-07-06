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
      titulo: 'Listas', url: '#', icono: 'assets/icon/Listas.png', mostrarDetalles:false,
      subPaginas: [
        { titulo: 'Clientes', url: 'clientes', icono: 'assets/icon/Cliente.png' },
        { titulo: 'Empresas', url: '/folder/Empresas', icono: 'assets/icon/Empresa.png' },
        { titulo: 'Títulos', url: 'titulos', icono: 'assets/icon/Titulo.png' }
      ]
    },
    { titulo: 'Alquiler', url: 'alquileres', icono: 'assets/icon/Alquiler.png',  mostrarDetalles:false, subPaginas: null },
    {
      titulo: 'Consultas', url: '#', icono: 'assets/icon/Reportes.png', mostrarDetalles:false,
      subPaginas: [
        { titulo: 'por Título', url: '/folder/ConsultasTitulos', icono: 'assets/icon/ReportesTitulos.png' },
        { titulo: 'por Cliente', url: '/folder/ConsultasClientes', icono: 'assets/icon/ReportesClientes.png' },
        { titulo: 'por Venta', url: '/folder/ConsultasVentas', icono: 'assets/icon/ReportesVentas.png' }
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
