import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { IllustrationComponent } from './illustration/illustration.component';
import { EnvironmentComponent } from './environment/environment.component';
import { CharacterComponent } from './character/character.component';
import { AboutComponent } from './about/about.component';
import { MuppoComponent } from './muppo/muppo.component';
import { SketchComponent } from './sketch/sketch.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    IllustrationComponent,
    EnvironmentComponent,
    CharacterComponent,
    AboutComponent,
    MuppoComponent,
    SketchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
