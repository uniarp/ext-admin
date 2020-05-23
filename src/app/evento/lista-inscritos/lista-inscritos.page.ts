import { ErrorHandlerService } from './../../core/services/error-handler.service';
import { EventosService, Evento } from './../eventos.service';
import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { AlertsService } from 'src/app/core/services/alerts.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ImprimirInscritosPage } from 'src/app/imprimir-inscritos/imprimir-inscritos.page';

@Component({
  selector: 'app-lista-inscritos',
  templateUrl: './lista-inscritos.page.html',
  styleUrls: ['./lista-inscritos.page.scss'],
})
export class ListaInscritosPage implements OnInit {
  codEvento:number;
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
    this.codEvento=codEvento;
    if (codEvento) {
      this.listarInscritos(codEvento);
    } else {
      this.modalCtrl.dismiss();
    }
  }

  async imprimir(){
    console.log(['Imprimindo...']);
    this.router.navigate(['/imprimir-inscritos', this.codEvento]); 
    this.modalCtrl.dismiss();
  }

  listarInscritos(codEvento: number) {
    this.eventoService.listarInscritos(codEvento)
      .then(data => {
        this.inscritos = data;
        console.log(data);
      })
      .catch(erro => this.erroHandler.handleError(erro));
  }

  validarFrequencia() {
    this.eventoService.validar(this.inscritos)
      .then(() => {
        this.alert.alertaToast('Presença validada', 'success');
      })
      .catch(erro => this.handler.handleError(erro));
  }

  voltar() {
    this.modalCtrl.dismiss();
  }
}
