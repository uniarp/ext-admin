import { Component, OnInit } from '@angular/core';
import { ParticipanteServiceService, Participante } from '../participante-service.service';

@Component({
  selector: 'app-participante-pesquisa',
  templateUrl: './participante-pesquisa.page.html',
  styleUrls: ['./participante-pesquisa.page.scss'],
})
export class ParticipantePesquisaPage implements OnInit {

  participante: any[];

  constructor(
    private participanteService: ParticipanteServiceService
  ) { }

  ngOnInit() {
    this.listar();
  }

  async listar() {
    this.participante = await this.participanteService.listar();

  }
  
  async excluir(id ){
    await this.participanteService.excluir(id);
    this.listar();
  }

  async alterar(){
   // this.participante = await this.participanteService.alterar();
  }


}
