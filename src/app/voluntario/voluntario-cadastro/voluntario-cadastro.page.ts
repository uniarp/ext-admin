import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { VoluntarioService, Voluntario } from '../voluntario.service';
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
  titulo = 'Novo ';

  constructor(
    public voluntarioService: VoluntarioService,
    private router: Router,
    private route: ActivatedRoute,
    public toast: ToastController,
    public handler: ErrorHandlerService,
    private alert: AlertsService
  ) { }

  ngOnInit() {

    console.log(this.route.snapshot.params);
    const codVoluntario = this.route.snapshot.params.codVoluntario;

    if (codVoluntario) {
      this.carregarVoluntario(codVoluntario);
    }

    this.atualizarTitulo();
  }

  get editando() {
    console.log('Teste');
    if (this.voluntario.codVoluntario) {
      return true;
    }
    return false;
  }

  atualizarTitulo() {
    if (this.editando) {
      this.titulo = 'Alterar ';
    }
  }

  carregarVoluntario(codVoluntario: number) {
    this.voluntarioService.listaVoluntario(codVoluntario)
      .then(data => {
        console.log(data);
        this.voluntario = data;
      })
      .catch(erro => this.handler.handleError(erro));
  }

  gravar() {
    this.voluntario.codVoluntario = this.voluntario.codVoluntario ? this.voluntario.codVoluntario : null;
    this.voluntarioService.cadastrar(this.voluntario)
      .then(() => {
        this.alert.alertaToast(this.voluntario.codVoluntario ? 'Voluntário Alterado com Sucesso' : 'Voluntário Cadastrado com Sucesso',
          'success');
        this.router.navigate(['voluntario-pesquisa']);
      })
      .catch(erro => this.handler.handleError(erro));
  }
}
