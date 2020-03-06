import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-pesquisa',
  templateUrl: './usuario-pesquisa.page.html',
  styleUrls: ['./usuario-pesquisa.page.scss'],
})
export class UsuarioPesquisaPage {
  constructor(public router:Router) { 
    
  }

  inserir(){
    this.router.navigate(['usuario-cadastro']);
  }

  alterar(){
    this.router.navigate(['usuario-cadastro']);
  }

  buscar(){

  }

  usuarios = [{ id: 1, nome: 'Zorzo', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br'},
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br'},
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br'},
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br'},
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br'},
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br'},
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br'},
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br'},
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br'},
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br'},
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br'},
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br'},
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br'},
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br'},
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br'},
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br'},
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br'},
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br'},
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br'},
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br'},
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br'},
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br'},
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br'},
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br'},
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br'},
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br'},
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br'},
  { id: 3, nome: 'Ultimo', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br'}
  ];

}
