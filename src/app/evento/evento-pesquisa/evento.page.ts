import { ListaInscritosPage } from './../lista-inscritos/lista-inscritos.page';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { Evento, EventosService } from '../eventos.service';
import { ModalController } from '@ionic/angular';
import { EventoCancelarPage } from '../evento-cancelar/evento-cancelar.page';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {

  evento: Evento;

  constructor(
    private router: Router,
    private eventosService: EventosService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.listar();
  }

  public adicionar() {
    this.router.navigate(['/evento-cadastro']);
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

  async listarInscritos(codEvento: number) {
    const modal = await this.modalController.create({
      component: ListaInscritosPage,
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
