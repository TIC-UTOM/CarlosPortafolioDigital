import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DesignComponent } from './design/design.component';

import { RedditComponent } from './reddit/reddit.component';
import { RedesComponent } from './redes/redes.component';
import { PrototipoComponent } from './prototipo/prototipo.component';
import { WebsComponent } from './webs/webs.component';
import { EscritorioComponent } from './escritorio/escritorio.component';
import { RoboticsComponent } from './robotics/robotics.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'design',
    component: DesignComponent
  },

  {
    path: 'page/reddit',
    component: RedditComponent
  },
  {
    path: 'page/redes',
    component: RedesComponent
  },
  {
    path: 'page/prototipos',
    component: PrototipoComponent
  },
  {
    path: 'page/webs',
    component: WebsComponent
  },
  {
    path: 'page/escritorio',
    component: EscritorioComponent
  },
  {
    path: 'page/robotics',
    component: RoboticsComponent
  },
  // Redirecciones de about
  {
    path: 'about/about',
    redirectTo: 'about',
    pathMatch: 'full' 
  },
  {
    path: 'about/contact',
    redirectTo: 'contact',
    pathMatch: 'full'
  },
  {
    path: 'about/design',
    redirectTo: 'design',
    pathMatch: 'full'
  },
  {
    path: 'about/page/reddit',
    redirectTo: 'page/reddit',
    pathMatch: 'full' 
  },
  {
    path: 'about/page/redes',
    redirectTo: 'page/redes',
    pathMatch: 'full' 
  },
  {
    path: 'about/page/prototipos',
    redirectTo: 'page/prototipos',
    pathMatch: 'full' 
  },
  {
    path: 'about/page/webs',
    redirectTo: 'page/webs',
    pathMatch: 'full' 
  },
  {
    path: 'about/page/escritorio',
    redirectTo: 'page/escritorio',
    pathMatch: 'full' 
  },
  {
    path: 'about/page/robotics',
    redirectTo: 'page/robotics',
    pathMatch: 'full' 
  },
  // Redirecciones de contact
  {
    path: 'contact/about',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'contact/contact',
    redirectTo: 'contact',
    pathMatch: 'full'
  },
  {
    path: 'contact/design',
    redirectTo: 'design',
    pathMatch: 'full'
  },
  {
    path: 'contact/page/reddit',
    redirectTo: 'page/reddit',
    pathMatch: 'full' 
  },
  {
    path: 'contact/page/redes',
    redirectTo: 'page/redes',
    pathMatch: 'full' 
  },
  {
    path: 'contact/page/prototipos',
    redirectTo: 'page/prototipos',
    pathMatch: 'full' 
  },
  {
    path: 'contact/page/webs',
    redirectTo: 'page/webs',
    pathMatch: 'full' 
  },
  {
    path: 'contact/page/escritorio',
    redirectTo: 'page/escritorio',
    pathMatch: 'full' 
  },
  {
    path: 'contact/page/robotics',
    redirectTo: 'page/robotics',
    pathMatch: 'full' 
  },
  //Redirecciones de design
  {
    path: 'design/about',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'design/contact',
    redirectTo: 'contact',
    pathMatch: 'full'
  },
  {
    path: 'design/design',
    redirectTo: 'design',
    pathMatch: 'full'
  },
  {
    path: 'design/page/reddit',
    redirectTo: 'page/reddit',
    pathMatch: 'full' 
  },
  {
    path: 'design/page/redes',
    redirectTo: 'page/redes',
    pathMatch: 'full' 
  },
  {
    path: 'design/page/prototipos',
    redirectTo: 'page/prototipos',
    pathMatch: 'full' 
  },
  {
    path: 'design/page/webs',
    redirectTo: 'page/webs',
    pathMatch: 'full' 
  },
  {
    path: 'design/page/escritorio',
    redirectTo: 'page/escritorio',
    pathMatch: 'full' 
  },
  {
    path: 'design/page/robotics',
    redirectTo: 'page/robotics',
    pathMatch: 'full' 
  },
  // Redirecciones de la pagina Reddit
  {
    path: 'page/reddit/about',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'page/reddit/contact',
    redirectTo: 'contact',
    pathMatch: 'full'
  },
  {
    path: 'page/reddit/design',
    redirectTo: 'design',
    pathMatch: 'full'
  },
  {
    path: 'page/reddit/page/reddit',
    redirectTo: 'page/reddit',
    pathMatch: 'full'
  },
  {
    path: 'page/reddit/page/redes',
    redirectTo: 'page/redes',
    pathMatch: 'full'
  },
  {
    path: 'page/reddit/page/prototipos',
    redirectTo: 'page/prototipos',
    pathMatch: 'full'
  },
  {
    path: 'page/reddit/page/redes',
    redirectTo: 'page/redes',
    pathMatch: 'full'
  },
  {
    path: 'page/reddit/page/escritorio',
    redirectTo: 'page/escritorio',
    pathMatch: 'full'
  },
  {
    path: 'page/reddit/page/robotics',
    redirectTo: 'page/robotics',
    pathMatch: 'full'
  },
  //Redireccion de pagina redes
  {
    path: 'page/redes/about',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'page/redes/contact',
    redirectTo: 'contact',
    pathMatch: 'full'
  },
  {
    path: 'page/redes/design',
    redirectTo: 'design',
    pathMatch: 'full'
  },
  {
    path: 'page/redes/page/reddit',
    redirectTo: 'page/reddit',
    pathMatch: 'full'
  },
  {
    path: 'page/redes/page/redes',
    redirectTo: 'page/redes',
    pathMatch: 'full'
  },
  {
    path: 'page/redes/page/prototipos',
    redirectTo: 'page/prototipos',
    pathMatch: 'full'
  },
  {
    path: 'page/redes/page/redes',
    redirectTo: 'page/redes',
    pathMatch: 'full'
  },
  {
    path: 'page/redes/page/escritorio',
    redirectTo: 'page/escritorio',
    pathMatch: 'full'
  },
  {
    path: 'page/redes/page/robotics',
    redirectTo: 'page/robotics',
    pathMatch: 'full'
  },
  //Redireccion de pagina prototipos
  {
    path: 'page/prototipos/about',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'page/prototipos/contact',
    redirectTo: 'contact',
    pathMatch: 'full'
  },
  {
    path: 'page/prototipos/design',
    redirectTo: 'design',
    pathMatch: 'full'
  },
  {
    path: 'page/prototipos/page/reddit',
    redirectTo: 'page/reddit',
    pathMatch: 'full'
  },
  {
    path: 'page/prototipos/page/redes',
    redirectTo: 'page/redes',
    pathMatch: 'full'
  },
  {
    path: 'page/prototipos/page/prototipos',
    redirectTo: 'page/prototipos',
    pathMatch: 'full'
  },
  {
    path: 'page/prototipos/page/redes',
    redirectTo: 'page/redes',
    pathMatch: 'full'
  },
  {
    path: 'page/prototipos/page/escritorio',
    redirectTo: 'page/escritorio',
    pathMatch: 'full'
  },
  {
    path: 'page/prototipos/page/robotics',
    redirectTo: 'page/robotics',
    pathMatch: 'full'
  },
  //Redireccion de pagina webs
  {
    path: 'page/webs/about',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'page/webs/contact',
    redirectTo: 'contact',
    pathMatch: 'full'
  },
  {
    path: 'page/webs/design',
    redirectTo: 'design',
    pathMatch: 'full'
  },
  {
    path: 'page/webs/page/reddit',
    redirectTo: 'page/reddit',
    pathMatch: 'full'
  },
  {
    path: 'page/webs/page/redes',
    redirectTo: 'page/redes',
    pathMatch: 'full'
  },
  {
    path: 'page/webs/page/prototipos',
    redirectTo: 'page/prototipos',
    pathMatch: 'full'
  },
  {
    path: 'page/webs/page/redes',
    redirectTo: 'page/redes',
    pathMatch: 'full'
  },
  {
    path: 'page/webs/page/escritorio',
    redirectTo: 'page/escritorio',
    pathMatch: 'full'
  },
  {
    path: 'page/webs/page/robotics',
    redirectTo: 'page/robotics',
    pathMatch: 'full'
  },
  //Redirecciones de pagina escritorio
  {
    path: 'page/escritorio/about',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'page/escritorio/contact',
    redirectTo: 'contact',
    pathMatch: 'full'
  },
  {
    path: 'page/escritorio/design',
    redirectTo: 'design',
    pathMatch: 'full'
  },
  {
    path: 'page/escritorio/page/reddit',
    redirectTo: 'page/reddit',
    pathMatch: 'full'
  },
  {
    path: 'page/escritorio/page/redes',
    redirectTo: 'page/redes',
    pathMatch: 'full'
  },
  {
    path: 'page/escritorio/page/prototipos',
    redirectTo: 'page/prototipos',
    pathMatch: 'full'
  },
  {
    path: 'page/escritorio/page/redes',
    redirectTo: 'page/redes',
    pathMatch: 'full'
  },
  {
    path: 'page/escritorio/page/escritorio',
    redirectTo: 'page/escritorio',
    pathMatch: 'full'
  },
  {
    path: 'page/escritorio/page/robotics',
    redirectTo: 'page/robotics',
    pathMatch: 'full'
  },
  //Redirecciones de pagina robotics
  {
    path: 'page/robotics/about',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'page/robotics/contact',
    redirectTo: 'contact',
    pathMatch: 'full'
  },
  {
    path: 'page/robotics/design',
    redirectTo: 'design',
    pathMatch: 'full'
  },
  {
    path: 'page/robotics/page/reddit',
    redirectTo: 'page/reddit',
    pathMatch: 'full'
  },
  {
    path: 'page/robotics/page/redes',
    redirectTo: 'page/redes',
    pathMatch: 'full'
  },
  {
    path: 'page/robotics/page/prototipos',
    redirectTo: 'page/prototipos',
    pathMatch: 'full'
  },
  {
    path: 'page/robotics/page/redes',
    redirectTo: 'page/redes',
    pathMatch: 'full'
  },
  {
    path: 'page/robotics/page/escritorio',
    redirectTo: 'page/escritorio',
    pathMatch: 'full'
  },
  {
    path: 'page/robotics/page/robotics',
    redirectTo: 'page/robotics',
    pathMatch: 'full'
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
