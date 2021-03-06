import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { VentanaModalModule } from './ventana-modal';
import { TituloComponent } from './componentes/titulo/titulo.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { AlquilerComponent } from './componentes/alquiler/alquiler.component';

import { CalendarModule } from 'ion2-calendar';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    ClienteComponent,
    AlquilerComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    NgxDatatableModule,
    HttpClientModule,
    FormsModule,
    VentanaModalModule,
    CalendarModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
