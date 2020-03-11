import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService, Usuario } from '../usuario.service';

@Component({
  selector: 'app-usuario-pesquisa',
  templateUrl: './usuario-pesquisa.page.html',
  styleUrls: ['./usuario-pesquisa.page.scss'],
})
export class UsuarioPesquisaPage implements OnInit {

  usuarios: Usuario;

  constructor(
    public router: Router,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.listarUsuario();
  }

  listarUsuario() {
    this.usuarioService.pesquisar()
      .then(data => {
        this.usuarios = data;
      })
      .catch(erro => null);
  }

  novoCadastro() {
    this.router.navigate(['usuario-cadastro']);
  }

  excluirCadastro() {

  }

  buscarCadastro() {
  
  }
}
