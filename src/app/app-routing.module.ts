import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { EncontradosComponent } from './components/encontrados/encontrados.component';
import { EncontradoSingleComponent } from './components/encontrado-single/encontrado-single.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { CrearreporteComponent } from './components/crearreporte/crearreporte.component';
import { ListadoComponent } from './components/listado/listado.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'login', component: LoginComponent},
  {path: 'encontrados', component: EncontradosComponent},
  {path: 'anim-encontrado', component: EncontradoSingleComponent},
  {path: 'acercade', component: AcercadeComponent},
  {path: 'crearreporte', component: CrearreporteComponent},
  {path: 'listado', component: ListadoComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
