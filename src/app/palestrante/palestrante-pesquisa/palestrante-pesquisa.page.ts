import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-palestrante-pesquisa',
  templateUrl: './palestrante-pesquisa.page.html',
  styleUrls: ['./palestrante-pesquisa.page.scss'],
})
export class PalestrantePesquisaPage implements OnInit {

  palestrantes = [{ id: 1, nome: 'Zorzo', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br', area: 'sistemaas de Informação' },
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br', area: 'sistemaas de Informação' },
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br', area: 'sistemaas de Informação' },
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br', area: 'sistemaas de Informação' },
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br', area: 'sistemaas de Informação' },
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br', area: 'sistemaas de Informação' },
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br', area: 'sistemaas de Informação' },
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br', area: 'sistemaas de Informação' },
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br', area: 'sistemaas de Informação' },
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br', area: 'sistemaas de Informação' },
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br', area: 'sistemaas de Informação' },
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br', area: 'sistemaas de Informação' },
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br', area: 'sistemaas de Informação' },
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br', area: 'sistemaas de Informação' },
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br', area: 'sistemaas de Informação' },
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br', area: 'sistemaas de Informação' },
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br', area: 'sistemaas de Informação' },
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br', area: 'sistemaas de Informação' },
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br', area: 'sistemaas de Informação' },
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br', area: 'sistemaas de Informação' },
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br', area: 'sistemaas de Informação' },
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br', area: 'sistemaas de Informação' },
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br', area: 'sistemaas de Informação' },
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br', area: 'sistemaas de Informação' },
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br', area: 'sistemaas de Informação' },
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br', area: 'sistemaas de Informação' },
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br', area: 'sistemaas de Informação' },
  { id: 3, nome: 'Ultimo', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br', area: 'sistemaas de Informação' }
  ];
  constructor() { }
  
  ngOnInit() {
    console.log(this.palestrantes);
  }

}
