import { LaunchProgramsComponent } from './pages/launch-programs/launch-programs.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    component:LaunchProgramsComponent,
    children:[
      {
        path:"",redirectTo:"module",pathMatch:"full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
