import { Component, OnInit } from '@angular/core';
import { ParticipanteServiceService, Participante } from '../participante-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-participante-pesquisa',
  templateUrl: './participante-pesquisa.page.html',
  styleUrls: ['./participante-pesquisa.page.scss'],
})
export class ParticipantePesquisaPage implements OnInit {

  participante: Participante;
  
  inserir(){
    this.router.navigate(['participante-cadastro']);
  }

  constructor(
    private participanteService: ParticipanteServiceService,
    public router: Router
  ) { }

  ngOnInit() {
    //this.listar();
  }

  /*async listar() {
    this.participante = await this.participanteService.listar();

  }*/
  
  async excluir(codParticipante){
    this.participante = await this.participanteService.excluir(codParticipante);
    //this.listar();
  }
  
  novoCadastro(){
    this.router.navigate(['participante-cadastro']);
  }

  async alterar(){
    // this.participante = await this.participanteService.alterar();
  }


}
