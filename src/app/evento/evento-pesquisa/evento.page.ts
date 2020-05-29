import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { Evento, EventosService } from '../eventos.service';
import { ListaInscritosPage } from './../lista-inscritos/lista-inscritos.page';
import { EventoCancelarPage } from '../evento-cancelar/evento-cancelar.page';
import { EscolherParticipantePage } from 'src/app/escolher-participante/escolher-participante.page';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit, OnDestroy {

  _sub: Subscription;
  evento: Evento;
  location: Location;

  constructor(
    private router: Router,
    private eventosService: EventosService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.listar();
    this._sub = EventosService.emitirEventReconsultar.subscribe(() => {
      this.listar();
    });
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }

  ionViewWillEnter() {
    this.listar();
  }

  public adicionar() {
    this.router.navigate(['/evento-cadastro']);
  }

  async inscreverParticipante(codEvento) {
    const modal = await this.modalController.create({
      component: EscolherParticipantePage,
      componentProps: {
        'codEvento': codEvento
      }
    });
    modal.present();
  }

  editarCadastro(codEvento) {
    this.router.navigate(['/evento-cadastro', codEvento]);
  }

  public async excluir(codEvento: number) {
    await this.eventosService.excluir(codEvento);
    this.listar();
  }

  public async listar() {
    this.evento = await this.eventosService.listar();
  }

  public async listarInscritos(codEvento: number) {
    const modal = await this.modalController.create({
      component: ListaInscritosPage,
      cssClass: "modal-tela-cheia ",
      componentProps: {
        'codEvento': codEvento
      }
    });
    await modal.present();
  }

  async cancelar(codEvento) {
    console.log();
    const modal = await this.modalController.create({
      component: EventoCancelarPage,
      cssClass: "TamanhoModal",
      componentProps: {
        'codEvento': codEvento
      }
    });
    modal.present();
  }

  validarFrequencia(codEvento) {
    this.router.navigate(['/evento-cadastro', codEvento]);
  }
}
