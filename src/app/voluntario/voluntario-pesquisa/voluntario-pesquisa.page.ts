import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voluntario-pesquisa',
  templateUrl: './voluntario-pesquisa.page.html',
  styleUrls: ['./voluntario-pesquisa.page.scss'],
})
export class VoluntarioPesquisaPage implements OnInit {

  voluntario = [
    { id: 1, nome: 'Zorzo', email: 'zorzo@uniarp.com.br', cpf: '111.222.333-44', curso: 'sistemaas de Informação' },
    { id: 2, nome: 'Conte', email: 'zorzo@uniarp.com.br', cpf: '111.222.333-44', curso: 'sistemaas de Informação' },
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.voluntario);
  }

}
