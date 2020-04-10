import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, ModalController } from '@ionic/angular';

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
  selector: 'app-evento-cadastro',
  templateUrl: './evento-cadastro.page.html',
  styleUrls: ['./evento-cadastro.page.scss'],
})
export class EventoCadastroPage implements OnInit {

  evento = new Evento();
  atividades: any[] = [];
  voluntario: any[];
  area: any[];



  constructor(
    private eventoService: EventosService,
    private atividadeService: AtividadeService,
    private tpAtividadeService: TipoAtividadeService,
    private voluntarioService: VoluntarioService,
    private areaService: AreaService,
    private alert: AlertsService,
    private route: ActivatedRoute,
    public modalController: ModalController,
    public handler: ErrorHandlerService
  ) { }

  ngOnInit() {
    const codEvento = this.route.snapshot.params['codEvento'];

    if (codEvento) {
      this.carregarEvento(codEvento);
    }
    this.carregarVoluntario();
    this.carregarArea();
  }


  get editando() {
    return Boolean(this.evento.codEvento);
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

  gravar(form: NgForm) {
    this.evento.atividades = this.atividades;
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

  excluiAtividade(codAtividade: number) {
    this.atividadeService.excluirAtividade(codAtividade)
      .then(res => {
        this.alert.alertaToast('Exclusão Realizada com sucesso', 'success');
        this.atividades = this.atividades.filter(elemento => {
          return elemento.codAtividade !== codAtividade;
        });
      })
      .catch(erro => this.handler.handleError(erro));
  }

  async novaAtividade() {
    const modal = await this.modalController.create({
      component: AtividadeCadastroPage
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data) {
      console.log(data);
      this.atividades.push(data);
    }
  }

  async alterar(codAtividade: number) {
    const modal = await this.modalController.create({
      component: AtividadeCadastroPage,
      componentProps: {
        'codAtividade': codAtividade
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    this.atividades.map(a => {
      if (data.codAtividade === a.codAtividade) {
        a.titulo = data.titulo;
        a.codTipo = data.codTipo;
        a.nomeTipo = data.nomeTipo;
        a.local = data.local;
        a.descricao = data.descricao;
        a.dataInicio = data.dataInicio;
        a.dataFim = data.dataFim;
        a.palestrante = data.palestrante;
      }
    });
  }

  pegaData() {
    this.evento.inscricaoInicio = moment(this.evento.inscricaoInicio).format("YYYY-MM-DD HH:mm:ss");
    this.evento.inscricaoFim = moment(this.evento.inscricaoFim).format("YYYY-MM-DD HH:mm:ss");
    this.evento.periodoFinal = moment(this.evento.periodoFinal).format("YYYY-MM-DD HH:mm:ss");
    this.evento.periodoInicial = moment(this.evento.periodoInicial).format("YYYY-MM-DD HH:mm:ss");
  }

}