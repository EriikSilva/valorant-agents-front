import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentesComponent } from './agentes/agentes.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"agentes",
    component:AgentesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
