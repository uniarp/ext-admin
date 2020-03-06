import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UsuarioService, Usuario } from '../usuario.service';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.page.html',
  styleUrls: ['./usuario-cadastro.page.scss'],
})
export class UsuarioCadastroPage implements OnInit {

  usuario;
  confirSenha = '';
  password_type = 'password';
  profissao = ['Analista', 'Desenvolvedor', 'Consultor', 'Professor'];

  constructor(private usuarioServie: UsuarioService) { }

  ngOnInit() {
    this.usuario = new Usuario();
    console.log(this.usuario);
  }

  exibeSenha() {
    this.password_type = this.password_type === 'text' ? 'password' : 'text';
  }

  gravar(form: FormControl) {
    this.usuarioServie.cadastrar()
      .then(user => {
        console.log(user)
      });
  }

}
