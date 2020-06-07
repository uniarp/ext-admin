import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

/*  pages = [
    {
      titulo: 'Gestão de Eventos',
      url: '/evento-pesquisa'
    },
    {
      titulo: 'Gestão de Usuários',
      url: '/usuario-pesquisa'
    },
    {
      titulo: 'Gestão de Palestrantes',
      url: '/palestrante-pesquisa'
    },
    {
      titulo: 'Gestão de Voluntários',
      url: '/voluntario-pesquisa'
    }
  ];

  selectedPath = '';
  menu: any;
*/
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  /*  this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    }); */
  }

  public eventos() {
    this.router.navigate(['/evento-pesquisa']);
  }

  public usuarios() {
    this.router.navigate(['/usuario-pesquisa']);
  }

  public scanner() {
    this.router.navigate(['/scanner-qr']);
  }

  public palestrantes() {
    this.router.navigate(['/palestrante-pesquisa']);
  }

  public voluntarios() {
    this.router.navigate(['/voluntario-pesquisa']);
  }

  participante() {
    this.router.navigate(['/participante-pesquisa']);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
