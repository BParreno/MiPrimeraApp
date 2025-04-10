import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { InicioPage } from './pages/inicio/inicio.page';
import { AboutPage } from './pages/about/about.page';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioPage
  },
  {
    path: 'about',
    component: AboutPage
  },
  {
    path: 'bienvenida',
    component: BienvenidaComponent
  }
];

export const appRouter = provideRouter(routes);