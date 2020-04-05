import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, ModalController } from '@ionic/angular';

import { AtividadeCadastroPage } from './../../atividade/atividade-cadastro/atividade-cadastro.page';
import { Evento, EventosService } from '../eventos.service';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';
import { AlertsService } from 'src/app/core/services/alerts.service';

@Component({
  selector: 'app-evento-cadastro',
  templateUrl: './evento-cadastro.page.html',
  styleUrls: ['./evento-cadastro.page.scss'],
})
export class EventoCadastroPage implements OnInit {

  evento = new Evento();
  atividades: any[] = [];

  constructor(
    private eventoService: EventosService,
    private router: Router,
    public toast: ToastController,
    public handler: ErrorHandlerService,
    private alert: AlertsService,
    private route: ActivatedRoute,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    console.log(Evento);
    // console.log(this.route.snapshot.params);
    const codEvento = this.route.snapshot.params.codEvento;

    if (codEvento) {
      this.carregarEvento(codEvento);
    }

    this.atualizarTitulo();
  }


  get editando() {
    console.log('Teste');
    if (this.evento.codEvento) {
      return true;
    }
    return false;
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

  gravar() {
    this.evento.codEvento = this.evento.codEvento ? this.evento.codEvento : null;
    this.eventoService.cadastrar(this.evento)
      .then(() => {
        this.alert.alertaToast(this.evento.codEvento ? 'Evento Alterado com Sucesso' : 'Evento Cadastrado com Sucesso',
          'success');
        this.router.navigate(['evento-pesquisa']);
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
      this.atividades.push(data);
    }
  }

  async alterar(codAtividade: number) {
    const modal = await this.modalController.create({
      component: AtividadeCadastroPage,
      componentProps: {
        'codAtividade':codAtividade
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    this.atividades.map(a => {
      if (data.codAtividade === a.codAtividade){
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

}