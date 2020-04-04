import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

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
  selector: 'app-evento-cadastro',
  templateUrl: './evento-cadastro.page.html',
  styleUrls: ['./evento-cadastro.page.scss'],
})
export class EventoCadastroPage implements OnInit {

  evento = new Evento();
  tipoAtividade: any[];
  voluntario: any[];
  area: any[];
  dataHoraInicio = "";
  dataHoraFim = "";

  constructor(
    private eventoService: EventosService,
    private atividadeService: AtividadeService,
    private tpAtividadeService: TipoAtividadeService,
    private voluntarioService: VoluntarioService,
    private areaService: AreaService,
    private alert: AlertsService,
    private handler: ErrorHandlerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const codEvento = this.route.snapshot.params['codEvento'];
    if (codEvento) {
      this.carregarEvento(codEvento);
    }
    this.carregarTpAtividade();
    this.carregarVoluntario();
    this.carregarArea();
    this.atualizarTitulo();
  }

  get editando() {
    return Boolean(this.evento.codEvento);
  }

  atualizarTitulo() {
    if (this.editando) {
      // this.evento = 'Alterar ';
    }
  }

  carregarEvento(codEvento: number) {
    this.eventoService.listaEvento(codEvento)
      .then(data => {
        console.log(data);
        this.evento = data;
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

  carregarTpAtividade() {
    this.tpAtividadeService.listaTpAtividade()
      .then(data => {
        this.tipoAtividade = data.map(a => ({ codTipo: a.codTipoAtividade, nome: a.nome }));
        console.log(this.tipoAtividade );
      })
      .catch(erro => this.handler.handleError(erro));
  }

  gravar(form: NgForm) {
    const msg = this.editando ? "alterado" : "cadastrado";
    this.pegaData();
    console.log(this.evento);
    this.eventoService.cadastrar(this.evento)
      .then(data => {
        this.alert.alertaToast(`${data.titulo} ${msg} com sucesso`, 'success');
        console.log(data);
      })
      .catch(erro => this.handler.handleError(erro));
  }

  pegaData() {
    this.evento.dataInicio = moment(this.dataHoraInicio).format("YYYY-MM-DD HH:mm:ss");
    this.evento.dataFim = moment(this.dataHoraFim).format("YYYY-MM-DD HH:mm:ss");
  }

  carregaData() {
    this.dataHoraInicio = this.evento.dataInicio;
    this.dataHoraFim = this.evento.dataFim;
  }
}