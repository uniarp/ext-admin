import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UsuarioService, Usuario } from '../usuario.service';
import { ToastController } from '@ionic/angular';

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
    public toast: ToastController
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
        this.alerta('Usuario Cadastrado com Sucesso', 'success');
        this.router.navigate(['usuario-pesquisa']);
      })
      .catch( erro => this.alerta(`Problema ao Cadastrar`, 'danger'));
  }

  async alerta(men: string, cor: string) {
    const toast = await this.toast.create({
      message: men,
      duration: 1500,
      color: cor
    });
    toast.present();
  }
}
