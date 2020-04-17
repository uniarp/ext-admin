import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InscricaoParticipanteService } from './inscricao-participante-service.service';
import { ToastController } from '@ionic/angular';
import {Participante} from '../participante/participante-service.service'
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';
import { AlertsService } from 'src/app/core/services/alerts.service';
import {Evento} from '../evento/eventos.service';

@Component({
  selector: 'app-inscricao-participante.page',
  templateUrl: './inscricao-participante.page.html',
  styleUrls: ['./inscricao-participante.page.scss'],
})
export class InscricaoParticipantePage implements OnInit {

  evento = new Evento();  
  participante = new Participante();
  confirSenha: string;
  password_type = 'password';
  titulo = 'Novo ';

  constructor(
    public inscricaoParticipanteService: InscricaoParticipanteService,
    private router: Router,
    private route: ActivatedRoute,
    public toast: ToastController,
    public handler: ErrorHandlerService,
    private alert: AlertsService
  ) { 

  }

  ngOnInit() {
    this.evento.atividades=['Atividade1', 'atividade2'];

  }

  
}
