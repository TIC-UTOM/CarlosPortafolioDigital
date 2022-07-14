import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DesignComponent } from './design/design.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { RedditComponent } from './reddit/reddit.component';
import { RedesComponent } from './redes/redes.component';
import { PrototipoComponent } from './prototipo/prototipo.component';
import { WebsComponent } from './webs/webs.component';
import { EscritorioComponent } from './escritorio/escritorio.component';
import { RoboticsComponent } from './robotics/robotics.component';
import { TinkercadComponent } from './tinkercad/tinkercad.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    DesignComponent,
    MenuComponent,
    RedditComponent,
    RedesComponent,
    PrototipoComponent,
    WebsComponent,
    EscritorioComponent,
    RoboticsComponent,
    TinkercadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
