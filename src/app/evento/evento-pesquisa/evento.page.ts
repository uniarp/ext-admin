import { ListaInscritosPage } from './../lista-inscritos/lista-inscritos.page';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { Evento, EventosService } from '../eventos.service';
import { ModalController } from '@ionic/angular';
import { EventoCancelarPage } from '../evento-cancelar/evento-cancelar.page';
import { ResourceLoader } from '@angular/compiler';
import { EscolherParticipantePage } from 'src/app/escolher-participante/escolher-participante.page';
import { Subscription } from 'rxjs';

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
      console.log('Listou');
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

    console.log();
    const modal = await this.modalController.create({
      component: EscolherParticipantePage,
      componentProps: {
        'codEvento': codEvento
      }
    });
    modal.present();
  }


  editarCadastro(codEvento) {
    console.log(codEvento);
    this.router.navigate(['/evento-cadastro', codEvento]);

  }

  public async excluir(codEvento: number) {
    console.log('excluir ' + codEvento);
    await this.eventosService.excluir(codEvento);
    this.listar();
  }

  public async listar() {
    this.evento = await this.eventosService.listar();
    console.log(this.evento);
    
  }
  

  public async listarInscritos(codEvento: number) {
    const modal = await this.modalController.create({
      component: ListaInscritosPage,
      cssClass:"TamanhoModal",
      componentProps: {
        'codEvento': codEvento
      }
      
    });
    await modal.present();
    //window.location.reload();
    //return false;
  }

  async cancelar(codEvento) {
    console.log();
    const modal = await this.modalController.create({
      component: EventoCancelarPage,
      cssClass:"TamanhoModal",
      componentProps: {
        'codEvento': codEvento
      }
    });
    modal.present();
  }

  validarFrequencia(codEvento) {
    console.log(codEvento);
    this.router.navigate(['/evento-cadastro', codEvento]);
  }

}
