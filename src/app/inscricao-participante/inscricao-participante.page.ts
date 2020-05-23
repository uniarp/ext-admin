import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { InscricaoParticipanteService } from './inscricao-participante-service.service';
import { ToastController } from '@ionic/angular';
import { Participante, ParticipanteServiceService } from '../participante/participante-service.service'
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';
import { AlertsService } from 'src/app/core/services/alerts.service';
import { Evento, EventosService } from '../evento/eventos.service';
import { AtividadeService } from '../atividade/atividade.service';

@Component({
  selector: 'app-inscricao-participante.page',
  templateUrl: './inscricao-participante.page.html',
  styleUrls: ['./inscricao-participante.page.scss'],
})
export class InscricaoParticipantePage implements OnInit {

  atividadeService: AtividadeService;
  evento = new Evento();
  participante = new Participante();
  atividades: any[] = [];

  constructor(
    public inscricaoParticipanteService: InscricaoParticipanteService,
    public participanteService: ParticipanteServiceService,
    private router: Router,
    private route: ActivatedRoute,
    public toast: ToastController,
    public handler: ErrorHandlerService,
    private alert: AlertsService,
    public eventoService: EventosService
  ) {

  }

  ngOnInit() {
    const codParticipante = this.route.snapshot.params.codParticipante;
    const codEvento = this.route.snapshot.params.codEvento;

    if (codParticipante) {
      console.log(codParticipante);
      this.carregarParticipante(codParticipante);
    }
    if (codEvento) {
      console.log(codEvento);
      this.carregarEvento(codEvento);
    }
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

  carregarParticipante(codParticipante: number) {
    console.log(codParticipante);
    this.participanteService.listaParticipante(codParticipante)
      .then(data => {
        this.participante = data;
      })
      .catch(erro => this.handler.handleError(erro));
  }

  desmarcaAtvidade(codAtividade) {
    this.atividades = this.atividades.filter(data => {
      return data.codAtividade !== codAtividade;
    })
  }

  gravarInscricao(form: NgForm) {
    const inscricao = [{ codEvento: 0, codParticipante: 0, atividades: [] }];
    inscricao.map(i => {
      i.codEvento = this.evento.codEvento;
      i.codParticipante = this.participante.codParticipante;
      i.atividades = this.atividades;
    });

    this.inscricaoParticipanteService.cadastrar(inscricao)
      .then(data => {
        this.alert.alertaToast('Inscrição Finalizada', 'success');
        this.router.navigate(['/evento-pesquisa']);
      })
      .catch(erro => this.handler.handleError(erro));
  }
}
