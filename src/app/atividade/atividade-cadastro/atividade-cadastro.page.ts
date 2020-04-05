import { ModalController, NavParams } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Component, OnInit, Input  } from '@angular/core';
import { PalestranteService } from './../../palestrante/palestrante.service';
import { ActivatedRoute } from '@angular/router';

import * as moment from 'moment';

import { ErrorHandlerService } from './../../core/services/error-handler.service';
import { Atividade } from './../atividade.service';
import { TipoAtividadeService } from './../../tipoAtividade/tipo-atividade.service';
import { AtividadeService } from '../atividade.service';
import { AlertsService } from 'src/app/core/services/alerts.service';
@Component({
  selector: 'app-atividade-cadastro',
  templateUrl: './atividade-cadastro.page.html',
  styleUrls: ['./atividade-cadastro.page.scss'],
})
export class AtividadeCadastroPage implements OnInit {

  atividade = new Atividade();
  tipoAtividade: any[];
  palestrante: any[];
  dataHoraInicio = "";
  dataHoraFim = "";
  @Input() codAtividade: number;

  constructor(
    private atividadeService: AtividadeService,
    private tpAtividadeService: TipoAtividadeService,
    private palestranteService: PalestranteService,
    private alert: AlertsService,
    private handler: ErrorHandlerService,
    private route: ActivatedRoute,
    public modalCtrl: ModalController,
    public navParams: NavParams
  ) { }

  ngOnInit() {
    //const codAtividade = this.route.snapshot.params['codAtividade'];
    this.codAtividade = this.navParams.get('codAtividade');
    if (this.codAtividade) {
      this.carregarAtividade(this.codAtividade);
    }
    this.carregarTpAtividade();
    this.carregarPalestrantes();
  }

  get editando() {
    return Boolean(this.atividade.codAtividade);
  }

  carregarTpAtividade() {
    this.tpAtividadeService.listaTpAtividade()
      .then(data => {
        this.tipoAtividade = data.map(a => ({ codTipo: a.codTipoAtividade, nome: a.nome }));
        console.log(this.tipoAtividade);
      })
      .catch(erro => this.handler.handleError(erro));
  }

  carregarPalestrantes() {
    this.palestranteService.listar()
      .then(data => this.palestrante = data)
      .catch(erro => this.handler.handleError(erro));
  }

  carregarAtividade(codAtividade: number) {
    this.atividadeService.listaAtividade(codAtividade)
      .then(data => {
        this.atividade = data;
        this.carregaData();
      })
      .catch(erro => this.handler.handleError(erro));
  }

  gravar(form: NgForm) {
    const msg = this.editando ? "alterado" : "cadastrado";
    this.pegaData();
    console.log(this.atividade);
    this.atividadeService.gravar(this.atividade)
      .then(data => {
        this.alert.alertaToast(`${data.titulo} ${msg} com sucesso`, 'success');
        this.dismiss(data);
      })
      .catch(erro => this.handler.handleError(erro));
  }

  dismiss(data) {
    this.modalCtrl.dismiss(data);
  }
  cancelar(){
    this.modalCtrl.dismiss();
  }

  pegaData() {
    this.atividade.dataInicio = moment(this.dataHoraInicio).format("YYYY-MM-DD HH:mm:ss");
    this.atividade.dataFim = moment(this.dataHoraFim).format("YYYY-MM-DD HH:mm:ss");
  }
  carregaData() {
    this.dataHoraInicio = this.atividade.dataInicio;
    this.dataHoraFim = this.atividade.dataFim;
  }
}