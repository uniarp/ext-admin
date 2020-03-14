import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { VoluntarioService, Voluntario } from "../voluntario.service";
import { ToastController } from '@ionic/angular';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';
import { AlertsService } from 'src/app/core/services/alerts.service';

@Component({
  selector: 'app-voluntario-cadastro',
  templateUrl: './voluntario-cadastro.page.html',
  styleUrls: ['./voluntario-cadastro.page.scss'],
})
export class VoluntarioCadastroPage implements OnInit {

  voluntario = new Voluntario();

  constructor(
    private voluntarioService: VoluntarioService,
    private router: Router,
    public toast: ToastController,
    public handler: ErrorHandlerService,
    private alert: AlertsService
  ) { }

  ngOnInit() {
  }

  gravar(form: FormControl) {
    this.voluntario.codVoluntario =55;
    this.voluntarioService.cadastrar(this.voluntario)
      .then(() => {
        this.alert.alertaToast('Voluntário Cadastrado com Sucesso', 'success');
        this.router.navigate(['voluntario-pesquisa']);
      })
      .catch( erro => this.handler.handleError(erro));
  }

}
