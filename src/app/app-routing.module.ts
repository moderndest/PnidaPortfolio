import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AfternoonteaComponent } from './afternoontea/afternoontea.component';
import { BountybrawlComponent } from './bountybrawl/bountybrawl.component';
import { CharacterComponent } from './character/character.component';
import { ClientComponent } from './client/client.component';
import { ClientdashComponent } from './clientdash/clientdash.component';
import { EnvAdventureComponent } from './env-adventure/env-adventure.component';
import { EnvdashComponent } from './envdash/envdash.component';
import { EnvironmentComponent } from './environment/environment.component';
import { HomeComponent } from './home/home.component';
import {IllustrationComponent} from'./illustration/illustration.component';
import { MuppoComponent } from './muppo/muppo.component';
import { ResumeComponent } from './resume/resume.component';
import { SketchComponent } from './sketch/sketch.component';
import { TheadventureoforgeComponent } from './theadventureoforge/theadventureoforge.component';
import { TinymightyComponent } from './tinymighty/tinymighty.component';
import { TothemoonComponent } from './tothemoon/tothemoon.component';
import { WhalecomingComponent } from './whalecoming/whalecoming.component';


const routes: Routes = [
  {path:"",redirectTo:"/", pathMatch:"full"},
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"illustration",
    component: IllustrationComponent
  },
  {
    path:"environment",
    component: EnvironmentComponent,
    children:[
      {path:"", component:EnvdashComponent},
      {path:"afternoontea", component:AfternoonteaComponent},
      {path:"adventureoforege", component:EnvAdventureComponent},
      {path:"whalecoming", component:WhalecomingComponent},
      {path:"tothemoon", component:TothemoonComponent},
      {path:"",redirectTo:"", pathMatch:"full"},
      {path:"**", component:EnvironmentComponent},
    ]
  },
  {
    path:"character",
    component: CharacterComponent
  },
  {
    path:"theadventureoforge",
    component: TheadventureoforgeComponent
  },
  {
    path:"muppo",
    component: MuppoComponent
  },
  {
    path:"study",
    component: SketchComponent
  },
  {
    path:"about",
    component: AboutComponent
  },
  {
    path:"client",
    component: ClientComponent,
    children:[
      {path:"",component:ClientdashComponent},
      {path:"tinymighty", component:TinymightyComponent},
      {path:"bountybrawl", component:BountybrawlComponent},
      {path:"",redirectTo:"", pathMatch:"full"},
      {path:"**", component:ClientComponent},
    ]
  },
  {
    path:"resume",
    component: ResumeComponent
  },
  {path:"**", component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
