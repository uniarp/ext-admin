import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ParticipanteServiceService, Participante } from '../participante-service.service';
import { ToastController } from '@ionic/angular';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';
import { AlertsService } from 'src/app/core/services/alerts.service';

@Component({
  selector: 'app-participante-cadastro',
  templateUrl: './participante-cadastro.page.html',
  styleUrls: ['./participante-cadastro.page.scss'],
})
export class ParticipanteCadastroPage implements OnInit {

  participante = new Participante();
  confirSenha: string;
  password_type = 'password';

  constructor(
    public participanteService: ParticipanteServiceService,
    private router: Router,
    public toast: ToastController,
    public handler: ErrorHandlerService,
    private alert: AlertsService
  ) { }

  ngOnInit() {
  }

  exibeSenha() {
    this.password_type = this.password_type === 'text' ? 'password' : 'text';
  }

  gravar(form: FormControl) {
    this.participante.codParticipante = null;
    this.participanteService.cadastrar(this.participante)
      .then(user => {
        console.log(user)
        this.alert.alertaToast('Participante Cadastrado com Sucesso', 'success');
        this.router.navigate(['participantes-listar']);
      })
      .catch(erro => this.handler.handleError(erro));
  }

}
