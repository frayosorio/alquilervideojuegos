import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TituloComponent } from './componentes/titulo/titulo.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AlquilerComponent } from './componentes/alquiler/alquiler.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  { path: 'titulos', component: TituloComponent },
  { path: 'clientes', component: ClienteComponent },
  { path: 'alquileres', component: AlquilerComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
