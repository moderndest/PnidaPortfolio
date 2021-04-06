import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnvironmentComponent } from './environment/environment.component';
import { HomeComponent } from './home/home.component';
import {IllustrationComponent} from'./illustration/illustration.component';


const routes: Routes = [
  {path:"",redirectTo:"/home", pathMatch:"full"},
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"illustration",
    component: IllustrationComponent
  },
  {
    path:"environment",
    component: EnvironmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
