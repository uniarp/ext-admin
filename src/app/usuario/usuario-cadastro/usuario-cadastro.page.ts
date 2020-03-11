import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UsuarioService, Usuario } from '../usuario.service';
import { ToastController } from '@ionic/angular';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';
import { AlertsService } from 'src/app/core/services/alerts.service';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.page.html',
  styleUrls: ['./usuario-cadastro.page.scss'],
})
export class UsuarioCadastroPage implements OnInit {

  usuario = new Usuario();
  confirSenha: string;
  password_type = 'password';

  constructor(
    public usuarioServie: UsuarioService,
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
    this.usuario.codUsuario = null;
    this.usuarioServie.cadastrar(this.usuario)
      .then(user => {
        console.log(user)
        this.alert.alertaToast('Usuario Cadastrado com Sucesso', 'success');
        this.router.navigate(['usuario-pesquisa']);
      })
      .catch( erro => this.handler.handleError(erro));
  }

}
