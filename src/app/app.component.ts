import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { InicioComponent } from './components/inicio/inicio.component';
import { InicioPage } from './pages/inicio/inicio.page';
import { AboutPage } from './pages/about/about.page';
import { IonicModule } from '@ionic/angular';
import { BienvenidaComponent } from "./components/bienvenida/bienvenida.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, IonicModule, BienvenidaComponent]
})
export class AppComponent {
  constructor() {}
}
