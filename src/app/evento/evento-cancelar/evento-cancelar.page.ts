import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, ModalController, NavParams } from '@ionic/angular';

import { AtividadeCadastroPage } from './../../atividade/atividade-cadastro/atividade-cadastro.page';
import { Evento, EventosService } from '../eventos.service';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';
import { AlertsService } from 'src/app/core/services/alerts.service';
import { VoluntarioService } from 'src/app/voluntario/voluntario.service';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { TipoAtividadeService } from 'src/app/tipoAtividade/tipo-atividade.service';
import { AtividadeService } from 'src/app/atividade/atividade.service';
import { AreaService } from 'src/app/area/area.service';

@Component({
  selector: 'app-evento-cancelar',
  templateUrl: './evento-cancelar.page.html',
  styleUrls: ['./evento-cancelar.page.scss'],
})
export class EventoCancelarPage implements OnInit {

  evento = new Evento();
  atividades: any[] = [];
  voluntario: any[];
  area: any[];
  @Input() codEvento: number;

  constructor(
    private eventoService: EventosService,
    private atividadeService: AtividadeService,
    private tpAtividadeService: TipoAtividadeService,
    private voluntarioService: VoluntarioService,
    private areaService: AreaService,
    private alert: AlertsService,
    private route: ActivatedRoute,
    private router: Router,
    public modalController: ModalController,
    public handler: ErrorHandlerService,
    public navParams: NavParams
  ) { }

  ngOnInit() {
    this.codEvento = this.navParams.get('codEvento');
    if (this.codEvento) {
      this.carregarEvento(this.codEvento);
    }
    this.carregarVoluntario();
    this.carregarArea();
  }

  carregarEvento(codEvento: number) {
    this.eventoService.listaEvento(codEvento)
      .then(data => {
        console.log(data);
        this.evento = data;
        this.atividades = this.evento.atividades;
      })
      .catch(erro => this.handler.handleError(erro));
  }

  carregarArea() {
    this.areaService.listarArea()
      .then(data => this.area = data)
      .catch(erro => this.handler.handleError(erro));
  }

  carregarVoluntario() {
    this.voluntarioService.listar()
      .then(data => this.voluntario = data)
      .catch(erro => this.handler.handleError(erro));
  }

  pegaData() {
    this.evento.inscricaoInicio = moment(this.evento.inscricaoInicio).format("YYYY-MM-DD HH:mm:ss");
    this.evento.inscricaoFim = moment(this.evento.inscricaoFim).format("YYYY-MM-DD HH:mm:ss");
    this.evento.periodoFinal = moment(this.evento.periodoFinal).format("YYYY-MM-DD HH:mm:ss");
    this.evento.periodoInicial = moment(this.evento.periodoInicial).format("YYYY-MM-DD HH:mm:ss");
  }

  cancelar(codEvento: number) {
    this.eventoService.cancelar(codEvento)
    this.alert.alertaToast('Evento cancelado com sucesso', 'success');
    console.log('Status Cancelado');
    this.router.navigate(['/evento-pesquisa']);
  }

  close() {
    this.modalController.dismiss();
  }

}