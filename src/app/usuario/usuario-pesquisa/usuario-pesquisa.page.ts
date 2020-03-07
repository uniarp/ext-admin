import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { HomePage } from 'src/app/home/home.page';
import { UsuarioCadastroPage } from '../usuario-cadastro/usuario-cadastro.page';
import { UsuarioService, Usuario } from '../usuario.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-usuario-pesquisa',
  templateUrl: './usuario-pesquisa.page.html',
  styleUrls: ['./usuario-pesquisa.page.scss'],
})
export class UsuarioPesquisaPage implements OnInit {
  usuarios: Observable<Usuario[]>;

  constructor(public router: Router,
    private usuarioService:UsuarioService,) { }

  ngOnInit() {
    this.usuarioService.listarUsuario();
    console.log("tudo certo");
    
  }

  // listarUsuario() {
  // this.usuarios=this.usuarioService.listarUsuarios();
  // console.log("usuarios listado com sucesso");
  // }
  
  novoCadastro() {
    this.router.navigate(['usuario-cadastro']);
  }

  excluirCadastro() {

  }

  buscarCadastro() {

  }
}
