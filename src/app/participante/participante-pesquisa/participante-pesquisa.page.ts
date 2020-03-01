import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-participante-pesquisa',
  templateUrl: './participante-pesquisa.page.html',
  styleUrls: ['./participante-pesquisa.page.scss'],
})
export class ParticipantePesquisaPage implements OnInit {

  participante = [
    { id: 1, nome: 'Zorzo', email: 'zorzo@uniarp.com.br', cpf: '111.222.333-44'},
    { id: 2, nome: 'Conte', email: 'zorzo@uniarp.com.br', cpf: '111.222.333-44'},
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.participante);
  }

}
