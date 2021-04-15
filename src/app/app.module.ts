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
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NavbarService } from './services/navbar.service';
import { ShowillustrationComponent } from './showillustration/showillustration.component';
import { ClientComponent } from './client/client.component';
import { ResumeComponent } from './resume/resume.component';
import { TinymightyComponent } from './tinymighty/tinymighty.component';
import { BountybrawlComponent } from './bountybrawl/bountybrawl.component';
import { ClientdashComponent } from './clientdash/clientdash.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    SketchComponent,
    ScrollToTopComponent,
    SideNavComponent,
    ShowillustrationComponent,
    ClientComponent,
    ResumeComponent,
    TinymightyComponent,
    BountybrawlComponent,
    ClientdashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
