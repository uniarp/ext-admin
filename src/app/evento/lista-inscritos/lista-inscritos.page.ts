import { ErrorHandlerService } from './../../core/services/error-handler.service';
import { EventosService, Evento } from './../eventos.service';
import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { AlertsService } from 'src/app/core/services/alerts.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lista-inscritos',
  templateUrl: './lista-inscritos.page.html',
  styleUrls: ['./lista-inscritos.page.scss'],
})
export class ListaInscritosPage implements OnInit {

  inscritos: any[] = [];
  evento: any[];
  validar: any[] = [];
  

  constructor(
    private eventoService: EventosService,
    private erroHandler: ErrorHandlerService,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private alert: AlertsService,
    private router: Router,
    private route: ActivatedRoute,
    public handler: ErrorHandlerService
  ) { }

  ngOnInit() {
    let codEvento: number = this.navParams.get('codEvento');
    if (codEvento) {
      this.listarInscritos(codEvento);
      console.log(this.inscritos);
    } else {
      this.modalCtrl.dismiss();
    }
  }

  listarInscritos(codEvento: number) {
    this.eventoService.listarInscritos(codEvento)
      .then(data => this.inscritos = data)
      .catch(erro => this.erroHandler.handleError(erro));
  }

  validarFrequencia(Participante:Evento) {
    this.eventoService.validar(Participante)
    .then(data => {
      this.alert.alertaToast('Presença validada', 'success');
      console.log("teste")
    })
    .catch(erro => this.handler.handleError(erro));
}

  voltar() {
    this.modalCtrl.dismiss();
  }
}
