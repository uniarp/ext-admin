import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UsuarioService, Usuario } from '../usuario.service';
import { ToastController } from '@ionic/angular';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';
import { AlertsService } from 'src/app/core/services/alerts.service';
import { getLocaleDayPeriods } from '@angular/common';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.page.html',
  styleUrls: ['./usuario-cadastro.page.scss'],
})
export class UsuarioCadastroPage implements OnInit {

  usuario = new Usuario();
  confirSenha: string;
  password_type = 'password';
  titulo = 'Novo ';

  constructor(
    public usuarioServie: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
    public toast: ToastController,
    public handler: ErrorHandlerService,
    private alert: AlertsService
  ) { }

  ngOnInit() {
    const codUsuario = this.route.snapshot.params['codUsuario'];

    if (codUsuario) {
      this.carregarUsuario(codUsuario);
    }

    this.atualizarTitulo();
  }


get editando() {
  console.log('TEste');
    if (this.usuario.codUsuario) {
      return true;
    }
    return false;
  }

  atualizarTitulo() {
    if (this.editando) {
      this.titulo = "Alterar ";
    }
  }

  exibeSenha() {
    this.password_type = this.password_type === 'text' ? 'password' : 'text';
  }

  carregarUsuario(codUsuario: number) {
    this.usuarioServie.listaUsuario(codUsuario)
      .then(data => {
        console.log(data);
        this.usuario = data;
      })
      .catch(erro => this.handler.handleError(erro));

  }


  gravar(form: FormControl) {
    if (!this.usuario.codUsuario) {
      this.usuario.codUsuario = null;
    }
    if (!this.usuario.cpf) {
      this.usuario.cpf = '000.000.000-00';
    }
    this.usuarioServie.cadastrar(this.usuario)
      .then(user => {
        console.log(user)
        this.alert.alertaToast('Usuario Cadastrado com Sucesso', 'success');
        this.router.navigate(['usuario-pesquisa']);
      })
      .catch(erro => this.handler.handleError(erro));
  }

}
