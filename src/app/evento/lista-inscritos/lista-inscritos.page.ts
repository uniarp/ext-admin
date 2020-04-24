import { ErrorHandlerService } from './../../core/services/error-handler.service';
import { EventosService } from './../eventos.service';
import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-lista-inscritos',
  templateUrl: './lista-inscritos.page.html',
  styleUrls: ['./lista-inscritos.page.scss'],
})
export class ListaInscritosPage implements OnInit {

  inscritos: any[] = [];

  constructor(
    private eventoService: EventosService,
    private erroHandler: ErrorHandlerService,
    public navParams: NavParams,
    public modalCtrl: ModalController,
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

  voltar() {
    this.modalCtrl.dismiss();
  }
}
