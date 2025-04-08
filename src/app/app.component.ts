import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { InicioComponent } from './components/inicio/inicio.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, InicioComponent],
})
export class AppComponent {
  constructor() {}
}
