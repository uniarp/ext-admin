import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.page.html',
  styleUrls: ['./usuario-cadastro.page.scss'],
})
export class UsuarioCadastroPage implements OnInit {

  usuario = { id: 0, nome: '', email: '', cpf: '', profissao: '', senha: '' };
  confirSenha = '';
  password_type = 'password';
  profissao = ['Analista', 'Desenvolvedor', 'Consultor', 'Professor'];
  constructor() { }

  ngOnInit() {

  }

  exibeSenha() {
    this.password_type = this.password_type === 'text' ? 'password' : 'text';
  }

  gravar(form: FormControl) {
    console.log(this.usuario);
  }

}
