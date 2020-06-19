import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, ModalController, AlertController } from '@ionic/angular';

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
  voluntariosSelec = [];
  voluntarioEvento: any[] = [];
  area: any[] = [];


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
    private alertController: AlertController
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
        this.voluntarioEvento = data.voluntario;
      })
      .catch(erro => this.handler.handleError(erro));
  }

  carregarArea() {
    this.areaService.listarArea()
      .then(data => {
        console.log(data);
        this.area = data.map(a => (
          { codArea: a.codArea, nome: a.nome }
        )
        );
      })
      .catch(erro => this.handler.handleError(erro));
  }

  carregarVoluntario() {
    this.voluntarioService.listar()
      .then(data => {
        this.voluntario = data;
        for (const v of this.voluntario) {
          this.voluntariosSelec.push({
            name: v.nome,
            type: 'checkbox',
            label: v.nome,
            value: v,
            checked: false
          });
        }
      })
      .catch(erro => this.handler.handleError(erro));
  }

  gravar(form: NgForm) {
    this.evento.atividades = this.atividades;
    const msg = this.editando ? "alterado" : "cadastrado";
    this.pegaData();
    this.evento.voluntario = this.voluntarioEvento;
    console.log(this.evento);
    this.eventoService.cadastrar(this.evento)
      .then(data => {
        this.alert.alertaToast(`${this.evento.titulo} ${msg} com sucesso`, 'success');
        console.log(data);
        this.router.navigate(['/evento-pesquisa']);
        EventosService.emitirEventReconsultar.emit();
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
      component: AtividadeCadastroPage,
      cssClass:"TamanhoModal",
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data) {
      this.atividades.push(data);
    }
  }

  async alterar(codAtividade: number) {
    const modal = await this.modalController.create({
      component: AtividadeCadastroPage,
      cssClass:"TamanhoModal",
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

  removerVoluntarios(codVoluntario) {
    this.voluntarioEvento = this.voluntarioEvento.filter(elemento => {
      return elemento.codVoluntario !== codVoluntario;
    });
  }

  async mostrarVoluntario() {
    const alert = await this.alertController.create({
      cssClass: 'tamanhoAlert',
      header: 'Selecione Voluntário(s)',
      inputs: this.voluntariosSelec,
      buttons: [
        {
          text: 'Cancelar'
        }, {
          text: 'Ok',
          handler: (data) => {
            for (let p of data) {
              this.voluntarioEvento.push(p);
            }
            console.log(this.voluntarioEvento);
          }
        }
      ]
    });

    await alert.present();
  }

}