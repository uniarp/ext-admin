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

@Component({
  selector: 'app-escolher-participante',
  templateUrl: './escolher-participante.page.html',
  styleUrls: ['./escolher-participante.page.scss'],
})
export class EscolherParticipantePage implements OnInit {

  participante = new Participante();
  evento= new Evento();
  @Input() codEvento: number;

  constructor(private http: HttpClient,
    private participanteService: ParticipanteServiceService,
    public router: Router,
    private route: ActivatedRoute,
    private eventosService: EventosService,
    public handler: ErrorHandlerService,
    public toast: ToastController,
    public modalController: ModalController,
    public navParams: NavParams
  ) { }

  ngOnInit() {
    this.listar();
    const codEvento = this.route.snapshot.params.codEvento;
    if (codEvento) {
      console.log(codEvento);
    }
  }

  listar() {
    this.participanteService.listar()
      .then(data => this.participante = data)
      .catch(error => this.handler.handleError(error));
  }

  async inscrever(codParticipante) {
    console.log(codParticipante);
    this.router.navigate(['../inscricao-participante', codParticipante,this.codEvento]);
    this.modalController.dismiss();
  }
}
