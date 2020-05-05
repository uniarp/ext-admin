import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Participante, ParticipanteServiceService } from '../participante/participante-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHandlerService } from '../core/services/error-handler.service';
import { ToastController } from '@ionic/angular';
import { Evento, EventosService } from '../evento/eventos.service';

@Component({
  selector: 'app-escolher-participante',
  templateUrl: './escolher-participante.page.html',
  styleUrls: ['./escolher-participante.page.scss'],
})
export class EscolherParticipantePage implements OnInit {

  participante= new Participante();
  evento= new Evento();

  constructor(private http: HttpClient,
    private participanteService: ParticipanteServiceService,
    public router: Router,
    private route: ActivatedRoute,
    private eventosService: EventosService,
    public handler: ErrorHandlerService,
    public toast: ToastController
  ) { }

  ngOnInit() {
    const codEvento = this.route.snapshot.params.codEvento;
    if (codEvento) {
      console.log(codEvento);
      this.carregarEvento(codEvento);
    }
    this.listar();
  }

  get editando() {
    console.log('Teste');
    if (this.evento.codEvento) {
      return true;
    }
    return false;
  }

  carregarEvento(codEvento: number) {
    console.log(codEvento);
    this.eventosService.listaEvento(codEvento)
      .then(data => {
        console.log(data);
        this.evento = data;
      })
      .catch(erro => this.handler.handleError(erro));
  }

  async listar() {
    this.participante = await this.participanteService.listar();
  }

  async inscrever(codParticipante) {
    console.log(codParticipante);
    this.router.navigate(['../inscricao-participante/', codParticipante]);
  }
}
