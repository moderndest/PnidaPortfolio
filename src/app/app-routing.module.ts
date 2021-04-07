import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { EnvironmentComponent } from './environment/environment.component';
import { HomeComponent } from './home/home.component';
import {IllustrationComponent} from'./illustration/illustration.component';
import { MuppoComponent } from './muppo/muppo.component';


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
  },
  {
    path:"character",
    component: CharacterComponent
  },
  {
    path:"muppo",
    component: MuppoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
