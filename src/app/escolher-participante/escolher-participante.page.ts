import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Participante, ParticipanteServiceService } from '../participante/participante-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHandlerService } from '../core/services/error-handler.service';
import { ToastController, NavParams, ModalController } from '@ionic/angular';
import { Evento, EventosService } from '../evento/eventos.service';
import { AlertsService } from '../core/services/alerts.service';
import { AtividadeService } from '../atividade/atividade.service';
import { TipoAtividadeService } from '../tipoAtividade/tipo-atividade.service';
import { EscolherParticipanteService } from './escolher-participante.service';

@Component({
  selector: 'app-escolher-participante',
  templateUrl: './escolher-participante.page.html',
  styleUrls: ['./escolher-participante.page.scss'],
})
export class EscolherParticipantePage implements OnInit {

  participante = [];
  evento = new Evento();
  filtro: String;
  @Input() codEvento: number;

  constructor(private http: HttpClient,
    private escocolherParticipanteService: EscolherParticipanteService,
    public router: Router,
    private route: ActivatedRoute,
    private eventosService: EventosService,
    public handler: ErrorHandlerService,
    public toast: ToastController,
    public modalController: ModalController,
    public navParams: NavParams
  ) { }

  ngOnInit() {
    // this.codEvento = this.route.snapshot.params.codEvento;
    // if (this.codEvento) {
    //   console.log(this.codEvento);
    // }
    this.listar();
  }

  buscarAcademico() {
    this.participante = this.participante.filter(p => {
      if (p.nome.indexOf(this.filtro) > -1) {
        return p;
      } else if (p.email.indexOf(this.filtro) > -1) {
        return p;
      } else if (p.ra.toString().indexOf(this.filtro) > -1) {
        return p;
      } else if (p.cpf.indexOf(this.filtro) > -1) {
        return p;
      }

    });
  }

  listar() {
    this.escocolherParticipanteService.listar(this.codEvento)
      .then(data => {
        this.participante = data;
        console.log(this.participante);
        this.filtro = '';
      })
      .catch(error => this.handler.handleError(error));
  }

  voltar() {
    this.modalController.dismiss();
  }

  async inscrever(codParticipante) {
    console.log(codParticipante);
    this.router.navigate(['../inscricao-participante', codParticipante, this.codEvento]);
    this.modalController.dismiss();
  }
}
